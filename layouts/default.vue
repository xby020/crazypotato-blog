<template>
  <div class="w-full h-full">
    <potato-app-bar
      color="bg-background-dark"
      class="relative z-99 max-w-1920px flex flex-row justify-between items-center px-4"
    >
      <!-- logo -->
      <div
        class="h-full text-transparent bg-gradient-5 bg-clip-text font-bold text-2xl flex items-center cursor-pointer tracking-wide ml-16"
      >
        <potato-avatar
          url="https://s2.loli.net/2022/02/18/xdLpywIRSjlz9fo.jpg"
          class="mx-2"
        ></potato-avatar>
        CrazyPotato
      </div>
      <!-- menu -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <ul class="menu menu-horizontal p-0">
          <!-- Top menu -->
          <li v-for="(m, mIndex) in menu" :key="mIndex">
            <div class="border-2 border-transparent hover:border-lime-600">
              <potato-icon :type="m.menuIcon"></potato-icon>
              <h2 class="text-lg">{{ m.menuName }}</h2>
            </div>
          </li>
        </ul>
      </div>
    </potato-app-bar>
    <!-- main content -->
    <div class="w-full h-full">
      <slot />
    </div>
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
