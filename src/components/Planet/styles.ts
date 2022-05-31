import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 1053px) {
    flex-direction: column;
    align-items: center;
  }

`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;


  > p {
    margin-top: 2rem;
    padding-right: 7rem;
    text-align: justify;
  }

  > button {
    margin-top: 3rem;
  }

  @media screen and (max-width: 1053px) {
    margin-bottom: 5rem;
    > h1 {
      text-align: center;
    }

    > p {
      padding: 0;
      margin: 0;
      margin-top: 1rem;
    }
  }
`;