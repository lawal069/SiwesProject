import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  @media screen and (max-width: 52em) {
    margin-top: 0;
  }
`;
const LandingMainBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  width: 100%;
  background: #A369DE;

  @media screen and (max-width: 52em) {
    margin: 75px 0 0 0;
    flex-direction: column;
    padding: 0 16px 90px;
  }
`;
const LandingMainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  
  @media screen and (max-width: 52em) {
    padding: 52px 14px 32px;
  }
`;

const MainStory = styled.div`
    background: #ffffff;
    border-radius: 5px;
    max-width: 650px;
    text-align: center;
    padding: 2rem;
    line-height: 26px;
    box-shadow: 0px 0px 40px 2px rgba(38, 44, 85, 0.12);
`
export {
    LandingContainer,
    LandingMainBox,
    LandingMainContent,
    MainStory,
}