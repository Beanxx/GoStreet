import styled from "@emotion/styled";

const PostDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;

  @media (max-width: 756px) {
    width: 90%;
  }
`;

const Post = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const BtnDiv = styled.div``;

const SpinnerDiv = styled.div``;

export { PostDiv, Post, BtnDiv, SpinnerDiv };
