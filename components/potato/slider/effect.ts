/// <reference path="./effect.d.ts" />

import * as THREE from 'three';
import gsap from 'gsap';
import { Texture } from 'three';

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

    const { sliderList, container } = opts;
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
    const images = sliderList.map((slider) => {
      return slider.imgLink;
    });
    images.forEach((img, imgIndex) => {
      loader.load(img, (texture) => {
        texture.magFilter = texture.minFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        sliderImages[imgIndex] = texture;
        if (imgIndex === 0) {
          this.switchById(0);
        }
      });
    });

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

    function setRenderSize(img: Texture) {
      const { renderW, renderH } = getRenderSize(img);
      renderer.setSize(renderW, renderH);
    }

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x23272a, 1.0);
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

      const currentImage = mat.uniforms.currentImage.value;
      if (currentImage && currentImage.image) {
        setRenderSize(mat.uniforms.currentImage.value);
      }
      render();
    };

    const animate = function () {
      requestAnimationFrame(animate);
      render();
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

        setRenderSize(sliderImages[id]);
        // image chage effect
        gsap.to(mat.uniforms.dispFactor, 1.5, {
          value: 1,
          ease: 'Expo.easeOut',
          onComplete: () => {
            render();
            mat.uniforms.currentImage.value = sliderImages[id];
            mat.uniforms.dispFactor.value = 0.0;
            this.isAnimating = false;
          }
        });

        const { title, content, link } = opts;
        // title anime
        if (title) {
          gsap.fromTo(
            title,
            0.4,
            {
              autoAlpha: 0,
              y: 0
            },
            {
              autoAlpha: 0,
              y: 20,
              ease: 'Expo.easeOut',
              onComplete: function () {
                gsap.to(title, 0.5, {
                  autoAlpha: 1,
                  y: 0
                });
              }
            }
          );
        }
        // content anime
        if (content) {
          gsap.fromTo(
            content,
            0.5,
            {
              autoAlpha: 0,
              y: 0
            },
            {
              autoAlpha: 0,
              y: 20,
              ease: 'Expo.easeIn',
              onComplete: function () {
                gsap.to(content, 0.5, {
                  autoAlpha: 1,
                  y: 0
                });
              }
            }
          );
        }
        // link anime
        if (link) {
          gsap.fromTo(
            link,
            0.6,
            {
              autoAlpha: 0,
              y: 0
            },
            {
              autoAlpha: 0,
              y: 0,
              ease: 'Expo.easeIn',
              onComplete: function () {
                gsap.to(link, 0.5, {
                  autoAlpha: 1,
                  y: 0
                });
              }
            }
          );
        }
      }
    };
  }
}
