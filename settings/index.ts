/**
 * UI framework theme settings
 *
 * @interface potatoTheme
 */
interface potatoTheme {
  color: {
    light: {
      primary: string;
      secondary: string;
      background: string;
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    dark?: {
      primary: string;
      secondary: string;
      background: string;
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
}

export const potatoTheme: potatoTheme = {
  color: {
    light: {
      primary: '#2bbc8a',
      secondary: '#5e837b',
      background: '#f7f7f7',
      success: '#6de357',
      warning: '#f0ef41',
      error: '#cc4d4f',
      info: '#67c4d2'
    },
    dark: {
      primary: '#2bbc8a',
      secondary: '#d5e4ce',
      background: '#282a35',
      success: '#6de357',
      warning: '#f0ef41',
      error: '#cc4d4f',
      info: '#67c4d2'
    }
  }
};
