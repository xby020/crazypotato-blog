import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  plugins: [
    require('daisyui'),
    require('@windicss/plugin-heropatterns')({
      patterns: ['texture', 'signal'],
      colors: {
        default: '#2bbc8a'
      },
      opacity: {
        default: '0.4'
      }
    })
  ],
  daisyui: {
    styled: true,
    themes: ['emerald', 'forest'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: 'forest'
  }
});
