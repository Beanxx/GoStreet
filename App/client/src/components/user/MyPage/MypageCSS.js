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
    p {
      color: white;
      font-size: 25px;
      margin-bottom: 1rem;
    }

    .avatar-style {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .button-style {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    button {
      max-width: 850px;
      margin: 1rem 0 3rem 0;
      border-radius: 5px;
      padding: 10px 15px;
      border: none;
      background-color: #50577a;
      color: white;
      font-weight: bold;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;

      &:hover {
        background-color: #464c6b;
      }
    }
  }
`;

export { MypageDiv };
