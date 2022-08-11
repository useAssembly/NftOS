import { Global } from "@emotion/react";

export const ChakraFonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-Black.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: italic;
      font-weight: 900;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-BlackItalic.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-Bold.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: italic;
      font-weight: 700;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-BoldItalic.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-Regular.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: italic;
      font-weight: 400;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-Italic.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-Light.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: italic;
      font-weight: 300;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-LightItalic.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 100;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-Thin.woff) format("woff");
    }
    @font-face {
      font-family: "Inter";
      font-style: italic;
      font-weight: 100;
      font-display: swap;
      src: url(/assets/fonts/Inter/Inter-ThinItalic.woff) format("woff");
    }
      `}
  />
);
