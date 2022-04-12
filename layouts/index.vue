<template>
  <div class="w-full h-full">
    <div class="navbar">
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
      <div class="navbar-center">
        <ul class="menu menu-horizontal p-0">
          <!-- Top menu -->
          <li v-for="(m, mIndex) in menu" :key="mIndex">
            <h2 class="flex flex-row justify-center">
              <potato-icon :type="m.menuIcon"></potato-icon>
              {{ m.menuName }}
            </h2>
          </li>
        </ul>
      </div>

      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
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
