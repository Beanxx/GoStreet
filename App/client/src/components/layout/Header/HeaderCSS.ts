import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  background-color: #1b1d25;
  font-size: 23px;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  .nav-style {
    width: 900px;
  }

  .logo-style {
    font-size: 35px;
    font-weight: bold;
  }

  .link-style {
    text-decoration: none;
    margin: 0 10px;
    color: white;
    cursor: pointer;
  }
`;

export { HeaderDiv };
