import styled from "@emotion/styled";

const MypageDiv = styled.div`
  padding: 2rem 0;
  max-width: 850px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 90%;
  }

  .avatar-box {
    .sub-style {
      color: white;
      font-size: 26px;
      text-align: center;
      margin: 10px;
    }

    .avatar-style {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
      margin-bottom: 1rem;
    }
  }

  .button-style {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

export { MypageDiv };
