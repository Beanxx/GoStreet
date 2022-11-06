import styled from "@emotion/styled";

const MainDiv = styled.div`
  max-width: 850px;
  margin: 0 auto;
  margin-top: 3rem;

  > .title-style {
    text-align: center;
    color: #fffbf6;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 10px;

    span {
      font-size: 18px;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

  @media (max-width: 850px) {
    margin-top: 2rem;
  }
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  margin-top: 2rem;

  input {
    width: 230px;
    height: 40px;
    padding: 3px 5px 3px 10px;
    border: none;
    border-radius: 5px;
  }

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const DropdownDiv = styled.div`
  .dropdown-toggle {
    font-size: 20px;
    letter-spacing: 3px;
  }

  .dropdown-menu {
    --bs-dropdown-min-width: 6rem;
  }

  .dropdown-item {
    font-size: 17px;
    text-align: center;
    letter-spacing: 3px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { MainDiv, FilterDiv, DropdownDiv, ButtonDiv };
