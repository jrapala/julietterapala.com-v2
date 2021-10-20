import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
      neutralLight: string;
      neutralMedium: string;
    };
    fonts: {
        primary: {
            fontFamily: string;
            regular: number;
            semiBold: number;
            bold: number;
        },
        secondary: {
            fontFamily: string;
            light: number;
            regular: number;
        },
    },
    debug: {
        border: string;
    },
  }
}
