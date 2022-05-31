import styled from "styled-components";

export const Container = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  position: relative;

  @media screen and (max-width: 520px ) {
    padding-right: 4rem;
  }
`;