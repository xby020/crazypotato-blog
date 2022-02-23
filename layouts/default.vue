<template>
  <div class="w-full h-full">
    <potato-app-bar
      color="bg-background-dark"
      class="flex flex-row justify-between 2xl:justify-around items-center px-4"
    >
      <!-- logo -->
      <div
        class="h-full text-transparent bg-gradient-5 bg-clip-text font-bold text-2xl flex items-center cursor-pointer tracking-wide"
      >
        <potato-avatar
          url="https://s2.loli.net/2022/02/18/xdLpywIRSjlz9fo.jpg"
          class="mx-2"
        ></potato-avatar>
        CrazyPotato
      </div>
      <!-- menu -->
      <div>This is Menu</div>
      <!-- Tools -->
      <div>This is Tools</div>
    </potato-app-bar>
    <!-- main content -->
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>
