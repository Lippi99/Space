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
    
    @media screen and (max-width: 1157px) {
      left: 50%;
      top: 40%;
      height: 100%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const TitleContainer = styled.div`
  width: 50%;
  h1 {
    margin-bottom: 1rem;
    + h1 {
      margin-left: 1.3rem;
    }
  }

  @media screen and (max-width: 1157px) {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;

    > h1 {
      font-size: 4rem;
    }
  };

  @media screen and (max-width: 800px) {
    bottom: 5%;
  }
  @media screen and (max-width: 540px) {
    bottom: 15%;
     > h1 {
       font-size: 2.5rem;
     }
     > p {
       font-size: 1.7rem;
     }
  }
`;