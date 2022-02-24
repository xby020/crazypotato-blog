<template>
  <icon-park :type="type" :theme="theme" />
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
  theme: 'filled'
});
</script>
