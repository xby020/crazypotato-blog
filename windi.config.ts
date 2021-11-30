import { defineConfig } from 'windicss/helpers';
import { potatoTheme } from '@/settings';

const { color } = potatoTheme;
export default defineConfig({
  theme: {
    colors: {
      primary: color.light.primary,
      secondary: color.light.secondary,
      background: color.light.background,
      success: color.light.success,
      warning: color.light.warning,
      error: color.light.error,
      info: color.light.info
    }
  }
});
