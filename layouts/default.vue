<template>
  <div class="w-full h-full">
    <potato-app-bar color="bg-background-dark" flat absolute>
      <div class="text-3xl font-extrabold">
        <span
          class="
            text-opacity-0
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-lime-500
            to-emerald-500
          "
        >
          Hello world
        </span>
      </div>
    </potato-app-bar>
    <!-- main content -->
    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>
