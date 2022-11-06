import React from "react";
import styled from "@emotion/styled";
import spinnerGif from "../../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <LoadingDiv>
      <img src={spinnerGif} alt="" />
    </LoadingDiv>
  );
};

export default Spinner;

const LoadingDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
