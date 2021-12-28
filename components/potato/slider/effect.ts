import * as THREE from 'three';
import gsap from 'gsap';
import { Texture } from 'three';

interface opts {
  images: string[];
  container: HTMLElement;
}

export class transEffect {
  switchById(id: number) {}
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

    // set render size
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    function getRenderSize(imgUrl: string): {
      renderH: number;
      renderW: number;
    } {
      let renderH: number, renderW: number;
      let image = new Image();
      image.src = imgUrl;
      console.log(image);
      const imgWidth = image.width;
      const imgHeight = image.height;
      console.log(imgWidth, imgHeight, containerWidth, containerHeight);
      if (imgHeight < imgWidth) {
        renderW = containerWidth;
        renderH = imgHeight;
      } else {
        renderW = imgWidth;
        renderH = containerHeight;
      }
      return {
        renderH,
        renderW
      };
    }
    const renderW = containerWidth;
    const renderH = containerHeight;

    // console.log(renderW, renderH);

    // three renderer and loader
    const renderer = new THREE.WebGLRenderer({
      antialias: false
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x23272a, 1.0);
    renderer.setSize(containerWidth, containerHeight);
    container.appendChild(renderer.domElement);

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

    // three scene
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
    const animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };
    animate();

    // resize
    window.addEventListener('resize', function (e) {
      renderer.setSize(containerWidth, containerHeight);
      render();
    });

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
