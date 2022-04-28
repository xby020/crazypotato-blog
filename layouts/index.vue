<template>
  <div class="w-full h-full">
    <div class="navbar p-0">
      <!-- logo -->
      <div class="navbar-start">
        <div
          class="h-full text-transparent bg-gradient-5 bg-clip-text font-bold text-2xl flex items-center cursor-pointer tracking-wide ml-16"
        >
          <potato-avatar
            url="https://s2.loli.net/2022/02/18/xdLpywIRSjlz9fo.jpg"
            class="mx-2"
          ></potato-avatar>
          CrazyPotato
        </div>
      </div>

      <!-- menu -->
      <div
        class="navbar-center flex flex-row justify-center items-center h-64px"
        v-if="isLgAndLarger"
      >
        <button
          v-for="(m, mIndex) in menu"
          :key="mIndex"
          class="h-full flex flex-row justify-center items-center px-2 transform duration-100 ease-in-out hover:bg-dark-50"
        >
          <potato-icon :type="m.menuIcon" size="18"></potato-icon>
          <span class="mx-2 text-center align-middle font-serif">{{
            m.menuName
          }}</span>
        </button>
      </div>

      <div class="navbar-end">
        <!-- menu drawer -->
        <div v-if="!isLgAndLarger">
          <!-- menu btn -->
          <label class="swap swap-rotate btn btn btn-circle">
            <input type="checkbox" v-model="drawer" />
            <potato-icon
              class="swap-off fill-current"
              type="hamburger-button"
              size="32"
            ></potato-icon>
            <potato-icon
              class="swap-on fill-current"
              type="close"
              size="1.5rem"
            ></potato-icon>
          </label>
          <!-- drawer -->
          <potato-overlay dark screen v-if="drawer">
            <div
              class="fixed top-0 left-0 z-100 w-full h-300px bg-neutral"
              ref="drawerCotainer"
            >
              233
            </div>
          </potato-overlay>
        </div>
      </div>
    </div>

    <!-- main content -->
    <div class="w-full h-full">
      <slot />
    </div>

    <!-- footer -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core';

// screen size
const breakpoints = useBreakpoints(breakpointsTailwind);
const isLgAndLarger = breakpoints.greater('lg');

// mobile drawer
const drawer = ref<boolean>(false);
const drawerCotainer = ref(null);
onClickOutside(drawerCotainer, () => {
  drawer.value = false;
});

interface Menu {
  menuName: string;
  menuIcon: string;
}
const menu: Menu[] = [
  {
    menuName: '设计',
    menuIcon: 'graphic-design'
  },
  {
    menuName: '编程',
    menuIcon: 'code'
  },
  {
    menuName: '游戏',
    menuIcon: 'game-three'
  },
  {
    menuName: '杂谈',
    menuIcon: 'french-fries'
  }
];
</script>
