import styled from "@emotion/styled";

const LoginDiv = styled.div`
  width: 85%;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 4rem;
  color: white;

  form {
    background-color: #1b1d25;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      border-radius: 7px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      margin-bottom: 20px;

      &:disabled {
        background-color: #dddcdc;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
    .nickname-input {
      margin-bottom: 0;
    }

    @media (max-width: 756px) {
      width: 100%;
    }
  }
`;

export default LoginDiv;
