import * as THREE from 'three';
import gsap from 'gsap';
import { Texture } from 'three';

interface opts {
  images: string[];
  container: HTMLElement;
}

export class transEffect {
  switchById(id: number) {}
  /**
   * @description 调整大小
   *
   * @param {number} w 容器宽度(px)
   * @param {number} h 容器高度(px)
   * @memberof transEffect
   */
  resize(w: number, h: number): void {}
  isAnimating: boolean;
  constructor(opts: opts) {
    // 工具常量
    const vertex = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
  `;
    const fragment = `
      
      varying vec2 vUv;

      uniform sampler2D currentImage;
      uniform sampler2D nextImage;

      uniform float dispFactor;

      void main() {

          vec2 uv = vUv;
          vec4 _currentImage;
          vec4 _nextImage;
          float intensity = 0.3;

          vec4 orig1 = texture2D(currentImage, uv);
          vec4 orig2 = texture2D(nextImage, uv);
          
          _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2 * intensity)));

          _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1 * intensity)));

          vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);

          gl_FragColor = finalTexture;

      }
  `;

    const { images, container } = opts;
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;

    // three renderer and loader
    const renderer = new THREE.WebGLRenderer({
      antialias: false
    });

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';

    // 处理 images 内每个图像
    const sliderImages: Texture[] = [];
    images.forEach((img) => {
      const image = loader.load(img);
      image.magFilter = image.minFilter = THREE.LinearFilter;
      image.anisotropy = renderer.capabilities.getMaxAnisotropy();
      sliderImages.push(image);
    });

    // set render size
    function getRenderSize(img: Texture) {
      let renderW: number, renderH: number;
      const { width, height } = img.image;
      const imgRatio = width / height;
      const containerRatio = containerWidth / containerHeight;
      if (imgRatio >= containerRatio) {
        renderH = containerHeight;
        renderW = renderH * imgRatio;
      } else {
        renderW = containerWidth;
        renderH = renderW / imgRatio;
      }
      return {
        renderW,
        renderH
      };
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x23272a, 1.0);
    // renderer.setSize(renderW, renderH);
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);

    // start render first sence
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x23272a);

    const camera = new THREE.OrthographicCamera(
      containerWidth / -2,
      containerWidth / 2,
      containerHeight / 2,
      containerHeight / -2,
      1,
      1000
    );
    camera.position.z = 1;

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        dispFactor: { value: 0.0 },
        currentImage: { value: sliderImages[0] },
        nextImage: { value: sliderImages[1] }
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      opacity: 1.0
    });
    const geometry = new THREE.PlaneBufferGeometry(
      container.clientWidth,
      container.clientHeight,
      1
    );
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(0, 0, 0);
    scene.add(object);

    function render(): void {
      renderer.render(scene, camera);
    }

    // handler monitor resize
    this.resize = function resize(w: number, h: number): void {
      containerWidth = w;
      containerHeight = h;
      const { renderW, renderH } = getRenderSize(sliderImages[0]);
      renderer.setSize(renderW, renderH);
      render();
    };

    const animate = async function () {
      requestAnimationFrame(animate);
      sliderImages[0].onUpdate = () => {
        const { renderW, renderH } = getRenderSize(sliderImages[0]);
        renderer.setSize(renderW, renderH);
      };
      renderer.render(scene, camera);
    };
    animate();

    // switch function
    this.isAnimating = false;
    /**
     * @description 按图片 index id 切换图片
     *
     * @param {number} id 图片id
     */
    this.switchById = function switchById(id: number): void {
      if (!this.isAnimating) {
        this.isAnimating = true;
        mat.uniforms.nextImage.value = sliderImages[id];
        gsap.to(mat.uniforms.dispFactor, 0.8, {
          value: 1,
          ease: 'Expo.easeOut',
          onComplete: () => {
            render();
            mat.uniforms.currentImage.value = sliderImages[id];
            mat.uniforms.dispFactor.value = 0.0;
            this.isAnimating = false;
          }
        });
      }
    };
  }
}
