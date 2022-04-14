import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      primary: string;
      secondary: string;
    };
    devices: {
      mobile: string;
      tablet: string;
      laptop: string;
      site: string;
      wide: string;
    };
  }
}
