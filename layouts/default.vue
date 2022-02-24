<template>
  <div class="w-full h-full">
    <potato-app-bar
      color="bg-background-dark"
      class="relative z-99 flex flex-row justify-between 2xl:justify-around items-center px-4"
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
      <div>
        <ul class="menu menu-horizontal p-0">
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a>
              Parent
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <!-- Tools -->
      <div>This is Tools</div>
    </potato-app-bar>
    <!-- main content -->
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>
