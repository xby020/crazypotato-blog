import { defineConfig } from 'windicss/helpers';
import { potatoTheme } from './settings';

const { color } = potatoTheme;
export default defineConfig({
  theme: {
    colors: {
      primary: {
        light: color.light.primary,
        DEFAULT: color.light.primary,
        dark: color.dark ? color.dark.primary : color.light.primary
      },
      secondary: {
        light: color.light.secondary,
        DEFAULT: color.light.secondary,
        dark: color.dark ? color.dark.secondary : color.light.secondary
      },
      background: {
        light: color.light.background,
        DEFAULT: color.light.background,
        dark: color.dark ? color.dark.background : color.light.background
      },
      success: color.light.success,
      warning: color.light.warning,
      error: color.light.error,
      info: color.light.info
    }
  }
});
