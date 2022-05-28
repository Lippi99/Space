import styled from "styled-components";

export const Container = styled.section`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;

  .planet {
    display: flex;
    align-items: center;
    width: 60%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    transform: rotate(-180deg);
    overflow: hidden;
    z-index: -999;

  }

`

export const TitleContainer = styled.div`
  width: 50%;

  h1 {
    margin-bottom: 1rem;
    + h1 {
      margin-left: 1.3rem;
    }
  }
`;