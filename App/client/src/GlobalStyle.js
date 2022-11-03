import * as React from "react";
import { css, Global } from "@emotion/react";
import reset from "emotion-reset";
import "./fonts/font.css";

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
          /* font-family: "GangwonEdu_OTFBoldA"; */
          /* font-family: "Pretendard-Regular"; */
          /* font-family: "Nanum Pen Script", cursive; */
        }
      `}
    />
  );
};

export default GlobalStyle;
