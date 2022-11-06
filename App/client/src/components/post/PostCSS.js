import styled from "@emotion/styled";

const PostDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 850px;
  margin: 0 auto;

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const Post = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  margin-top: 5vh;
  margin-bottom: 1vh;
  padding: 20px;
  background-color: #fffbf6;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    max-width: 850px;
    margin-bottom: 2rem;
    border-radius: 15px;
    padding: 7px 10px;
    border: none;
    background-color: #50577a;
    color: white;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:hover {
      background-color: #414763;
    }
  }
`;

const SpinnerDiv = styled.div``;

export { PostDiv, Post, BtnDiv, SpinnerDiv };
