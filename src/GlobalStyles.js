import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-size: 16px;
          font-family: "Lato", sans-serif;
          background: #dddad3;
          width: 100vw;
          height: 100vh;
        }
      `}
    />
  );
}

export default GlobalStyles;
