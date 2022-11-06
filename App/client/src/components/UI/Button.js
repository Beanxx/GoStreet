import styled from "@emotion/styled";

export const FillBtn = styled.button`
  background-color: #50577a;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 9px 13px;
  font-weight: bold;
  font-size: 21px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    background-color: #464c6b;
  }
`;

export const LightBtn = styled.button`
  background-color: #ffeaca;
  color: #767474;
  border-radius: 5px;
  border: none;
  padding: 6px 10px;
  font-weight: bold;
  font-size: 21px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 3px 6px;

  &:hover {
    background-color: #464c6b;
  }
`;

export const MoreBtn = styled.button`
  background-color: #50577a;
  color: white;
  border-radius: 50px;
  border: none;
  margin: 1rem 0 3rem 0;
  padding: 1rem;
  font-weight: bold;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    background-color: #414763;
  }
`;

export const LoginBtn = styled.button`
  border-radius: 20px;
  padding: 10px;
  background-color: #444c74;
  color: white;
  border: 1px solid black;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #5c679a;
    color: white;
    border: 1px solid black;
  }
`;

export const NicknameBtn = styled(LoginBtn)`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 15px;
  width: auto;
  padding: 7px 10px;
`;
