import * as React from "react";
import { Global, css } from "@emotion/react";
import reset from "emotion-reset";
import "./assets/fonts/font.css";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          background-color: #2e313d;
          font-family: "UhBeemysen";
          font-size: 20px;
        }
      `}
    />
  );
};

export default GlobalStyle;
