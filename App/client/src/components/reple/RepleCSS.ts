import styled from "@emotion/styled";

const RepleAreaDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 850px;
  margin: 0 auto;

  div {
    color: white;
    margin-bottom: 1rem;
    font-size: 24px;
  }

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const RepleUploadDiv = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 9fr 1fr;
    grid-template-rows: 45px;

    @media (max-width: 850px) {
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 40px;
    }

    input {
      padding: 5px 10px;
      height: 100%;
      border-radius: 7px 0px 0px 7px;
      border: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      &:active,
      &:focus {
        outline: none;
      }
    }

    button {
      height: 100%;
      border-radius: 0px 7px 7px 0px;
      border: none;
      font-weight: bold;
      background-color: #50577a;
      color: white;
      font-size: 18px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      &:hover,
      &:active {
        border: none;
        background-color: #414763;
      }
    }
  }
`;

const RepleListDiv = styled.div`
  margin-top: 1rem;
`;

const RepleContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
  background-color: #fffbf6;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  .content-style {
    display: flex;
    justify-content: space-between;
    color: black;
    margin-top: 1rem;
    margin-bottom: 0;

    @media (max-width: 850px) {
      font-size: 22px;
    }

    .edit-style {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      input {
        width: 97%;
        border-radius: 5px;
        border: none;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        margin-bottom: 10px;
        padding: 3px 10px;
        font-size: 20px;
      }

      .button-style {
        display: flex;
        gap: 10px;
      }
    }
  }

  > .info-style {
    display: flex;
    gap: 10px;
    color: black;
    margin-bottom: 0;

    .author {
      font-size: 20px;
      margin-top: 3px;

      @media (max-width: 850px) {
        font-size: 18px;
      }
    }

    .time {
      font-size: 18px;
      color: gray;
      margin-top: 3px;

      @media (max-width: 850px) {
        font-size: 16px;
      }
    }
  }

  .modalControl {
    cursor: pointer;
    position: relative;

    span {
      font-size: 20px;
    }
    .modalDiv {
      position: absolute;
      top: 25px;
      right: 5px;
      width: 65px;
      height: 65px;
      overflow: hidden;
      padding: 7px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;

      background-color: #ffeaca;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.2) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.2) 0px -2px 6px 0px inset;
      border-radius: 10px;

      p {
        color: #5f5f5f;
        cursor: pointer;
        &.delete {
          color: #ee6a6a;
        }
      }
    }
  }
`;

export { RepleAreaDiv, RepleUploadDiv, RepleListDiv, RepleContentDiv };
