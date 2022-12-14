import styled from "@emotion/styled";

const ListDiv = styled.div`
  padding: 1rem 0;
  max-width: 850px;
  margin: 0 auto;

  @media (max-width: 850px) {
    width: 90%;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  margin-bottom: 1.5rem;
  padding: 20px;
  background-color: #fffbf6;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  a {
    color: black;
    text-decoration: none;
  }

  .title-style {
    font-weight: bold;
    font-size: 27px;
    margin-left: 5px;
    margin-bottom: 13px;

    @media (max-width: 850px) {
      font-size: 21px;
    }
  }

  .info-style {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 1rem;

    .author-style {
      font-size: 20px;

      @media (max-width: 850px) {
        font-size: 17px;
      }
    }

    .date-style {
      color: gray;
      font-size: 18px;

      @media (max-width: 850px) {
        font-size: 16px;
      }
    }

    @media (max-width: 850px) {
      margin-top: 7px;
    }
  }

  .content-style {
    margin-left: 5px;
    font-size: 22px;

    @media (max-width: 850px) {
      font-size: 19px;
    }
  }

  .photo-style {
    margin-top: 1rem;
    border-radius: 10px;
  }
`;

export { ListDiv, ListItem };
