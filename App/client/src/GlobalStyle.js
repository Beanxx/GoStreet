import * as React from "react";
import { css, Global } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          font-family: "noto sans";
          background-color: #2e313d;
          font-family: "Nanum Pen Script", cursive;
        }
      `}
    />
  );
};

export default GlobalStyle;
