<template>
  <icon-park
    class="text-center align-middle text-inherit flex justify-center items-center"
    :type="type"
    :theme="theme"
    :size="size"
    :stroke-width="4"
    :fill="['#c9ffd9', '#44b85c']"
  />
</template>

<script lang="ts" setup>
import { IconPark } from '@icon-park/vue-next/es/all';
import { Theme } from '@icon-park/vue-next/es/runtime';

interface Props {
  type: string;
  theme?: Theme;
  size?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'add-text',
  theme: 'two-tone',
  size: '1.2rem'
});
</script>
