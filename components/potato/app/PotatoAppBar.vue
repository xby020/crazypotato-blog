<template>
  <div
    class="w-full flex flex-row justify-start items-center px-2"
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
  transparent?: boolean;
  color?: string;
}

// props
const props = withDefaults(defineProps<potatoAppBarProps>(), {
  dense: false,
  flat: false,
  absolute: false,
  transparent: false,
  color: 'bg-background'
});

// 根据props定义样式
const { dense, flat, absolute, transparent, color } = toRefs(props);

const propClass = computed(() => {
  // pros color
  if (transparent.value) {
    color.value = '';
  }

  // final class config
  return [
    dense.value ? 'h-48px' : 'h-64px',
    flat.value ? 'shadow-0' : 'shadow',
    absolute.value ? 'absolute top-0' : '',
    transparent.value ? 'bg-opacity-0' : '',
    color.value
  ];
});
</script>
