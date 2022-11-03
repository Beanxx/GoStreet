import styled from "@emotion/styled";

const MainDiv = styled.div`
  max-width: 850px;
  margin: 0 auto;
  margin-top: 2rem;

  .filter-style {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    input {
      width: 200px;
      padding: 3px 5px 3px 10px;
      border: none;
      border-radius: 5px;
    }

    @media (max-width: 850px) {
      width: 90%;
      padding: 0 40px;
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    max-width: 850px;
    margin: 1rem 0 3rem 0;
    border-radius: 50px;
    padding: 10px;
    border: none;
    background-color: #50577a;
    color: white;
    font-weight: bold;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    &:hover {
      padding: 15px;
    }
  }
`;

export { MainDiv, ButtonDiv };
