<template>
  <icon-park
    class="text-center align-middle text-2xl"
    :type="type"
    :theme="theme"
    size="1.5rem"
    :stroke-width="4"
    :fill="['currentColor', '#44b85c']"
  />
</template>

<script lang="ts" setup>
import { IconPark } from '@icon-park/vue-next/es/all';
import { Theme } from '@icon-park/vue-next/es/runtime';

interface Props {
  type: string;
  theme?: Theme;
}

withDefaults(defineProps<Props>(), {
  type: 'add-text',
  theme: 'two-tone'
});
</script>
