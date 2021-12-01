<template>
  <div
    class="w-full flex flex-col justify-center px-2 bg-background-dark"
    :class="propClass"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface potatoAppBarProps {
  dense?: boolean;
  flat?: boolean;
  absolute?: boolean;
}

// props
const props = withDefaults(defineProps<potatoAppBarProps>(), {
  dense: false,
  flat: false,
  absolute: false
});

// 根据props定义样式
const { dense, flat, absolute } = toRefs(props);
const propClass = computed(() => {
  return [
    dense.value ? 'h-48px' : 'h-64px',
    flat.value ? 'shadow-0' : 'shadow',
    absolute.value ? 'absolute top-0' : ''
  ];
});
</script>
