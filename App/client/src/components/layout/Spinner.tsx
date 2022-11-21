import styled from "@emotion/styled";
import spinnerImg from "../../assets/images/spinner.gif";

const Spinner = () => {
  return (
    <LoadingDiv>
      <img src={spinnerImg} alt="loading..." />
    </LoadingDiv>
  );
};

export default Spinner;

const LoadingDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
