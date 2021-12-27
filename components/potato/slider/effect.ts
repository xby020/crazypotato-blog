import * as THREE from 'three';
import gsap from 'gsap';
import { Texture } from 'three';

interface opts {
  images: string[];
  container: any;
}

export class transEffect {
  switchById(id: number) {}
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
    const renderW = 400;
    const renderH = 300;

    const { images, container } = opts;

    // three renderer and loader
    const renderer = new THREE.WebGLRenderer({
      antialias: false
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x23272a, 1.0);
    renderer.setSize(renderW, renderH);
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

    let camera = new THREE.OrthographicCamera(
      renderW / -2,
      renderW / 2,
      renderH / 2,
      renderH / -2,
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
      container.offsetWidth,
      container.offsetHeight,
      1
    );
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(0, 0, 0);
    scene.add(object);

    let animate = function () {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };
    animate();

    // switch function
    /**
     * @description 按图片 index id 切换图片
     *
     * @param {number} id 图片id
     */
    this.switchById = function switchById(id: number): void {
      mat.uniforms.nextImage.value = sliderImages[id];
      gsap.to(mat.uniforms.dispFactor, 1, {
        value: 1,
        ease: 'Expo.easeInOut',
        onComplete: () => {
          mat.uniforms.currentImage.value = sliderImages[id];
          mat.uniforms.dispFactor.value = 0.0;
        }
      });
    };
  }
}
