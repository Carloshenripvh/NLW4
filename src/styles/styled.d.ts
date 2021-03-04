import 'styled-componets';

interface Theme {
  colors: {
    white: string;
    primary: string;
    background:  string;
    grayline: string;
    text: string;
    textHighlight: string;
    title: string;
    buttonHover: string;
    buttonSucess: string;
    buttonCownt: string;
    blueDark: string;
    blueTwitter: string;
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
