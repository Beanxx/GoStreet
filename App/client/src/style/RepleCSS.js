import styled from "@emotion/styled";

const RepleAreaDiv = styled.div`
  padding-bottom: 1rem;
  max-width: 850px;
  margin: 0 auto;
  @media (max-width: 850px) {
    width: 90%;
  }

  div {
    color: white;
    margin-bottom: 1rem;
    font-size: 24px;
  }
`;

const RepleUploadDiv = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 50px;

    @media (max-width: 850px) {
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 40px;
    }

    input {
      padding: 5px 10px;
      height: 100%;
      border-radius: 10px 0px 0px 10px;
      border: none;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      border-radius: 0px 10px 10px 0px;
      border: none;
      font-weight: bold;
      background-color: #50577a;
      color: white;
      font-size: 20px;

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
    font-size: 25px;
    margin-top: 1rem;
    margin-bottom: 0;

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
      }

      .button-style {
        display: flex;
        gap: 10px;

        button {
          border-radius: 5px;
          border: none;
          background-color: #ffeaca;
          box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
            rgba(17, 17, 26, 0.1) 0px 0px 8px;

          &:hover {
            background-color: #ffdaa4;
          }
        }
      }
    }
  }

  .author-style {
    display: flex;
    gap: 10px;
    color: black;
    margin-bottom: 0;

    .time {
      font-size: 18px;
      color: gray;
      margin-top: 3px;
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
      width: 70px;
      height: 60px;
      overflow: hidden;
      padding: 7px;
      cursor: auto;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;

      background-color: whitesmoke;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03),
        0px 7.5px 6px rgba(0, 0, 0, 0.1);
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
