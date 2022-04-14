import { em } from "polished";

const theme = {
  devices: {
    mobile: `screen and (min-width: ${em(375)})`,
    tablet: `screen and (min-width: ${em(769)})`,
    laptop: `screen and (min-width: ${em(1024)})`,
    site: `screen and (min-width: ${em(1440)})`,
    wide: `screen and (min-width: ${em(1921)})`,
  },
  colors: {
    text: "#ccc",
    primary: "#72A9AE",
    secondary: "#3B5D60",
  },
};

export default theme;
