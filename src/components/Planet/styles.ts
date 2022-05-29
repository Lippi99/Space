import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    margin-top: 6rem;
    padding-right: 7rem;
    text-align: justify;
  }

  > button {
    margin-top: 3rem;
  }
`;