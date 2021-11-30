<template>
  <div class="font-bold text-3xl blur-sm">
    This is index page.
    <div>
      <nuxt-link to="/blog" v-slot="{ navigate }">
        <div class="w-200px h-100px bg-blue-500 rounded-lg">
          <button @click="navigate">blog</button>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
