import styled from "@emotion/styled";

const UploadDiv = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin: 20px 0 10px;
    color: white;
  }

  .title-style {
    width: 100%;

    #title {
      width: 96.4%;
      margin-left: 10px;
      border-radius: 7px;
      border: none;
      padding: 5px 10px;
      margin-bottom: 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  textarea {
    min-height: 350px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    &:active,
    &:focus {
      outline: none;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }

    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  button {
    max-width: 850px;
    margin: 1rem 0 3rem 0;
    border-radius: 20px;
    padding: 10px;
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

export { UploadDiv, UploadForm, UploadButtonDiv };
