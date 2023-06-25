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
  justify-content: space-between;
  padding: 70px;
  width: 100%;
  background: #A369DE;
  color: #fff;
  gap: 50px;

  @media screen and (max-width: 52em) {
    /* margin: 75px 0 0 0; */
    flex-direction: column;
    padding: 0 16px 50px;
    > img{
      width: 100%;
      height: auto;
    }
  }
`;
const LandingMainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  > div {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
  }
  > p {
    font-size: 20px;
    text-align: justify;
  }
  
  @media screen and (max-width: 52em) {
    padding: 52px 14px 32px;
    > div {
      font-size: 30px;
    }
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
`;

const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #A369DE;
  padding: 4rem;

  @media screen and (max-width: 52em){
    width: 100%;
    padding: 0 22px;
  }
`;
const WhatWeDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 4rem;

  > h3 {
    font-size: 30px;
    color: #5A80B7;
    padding-left: 10px;
    border-left: 5px solid #A369DE;
  }

  @media screen and (max-width: 52em){
    padding: 0 16px;
  }

`;
const ListContainer = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
  margin-bottom: 50px;
  > div{
    >h3{
      color: #A369DE;
    }
    > p{
      color: #5A80B7;
      text-align: justify;
    }
  }
  
  @media screen and (max-width: 52em){
    flex-direction: column;
    margin-bottom: 30px;
    gap: 0;
    > img{
      width: 100%;
      height: auto;
    }
  }
`
const RequirementContainer = styled.div`
  > p {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    padding-left: 10px;
    border-left: 5px solid #191b1d;
    color: #fff;
  }
`;

const ContentCont = styled.div``;

const ContentInfo = styled.div``;

const RequirementDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3);

  @media screen and (max-width: 52em){
    width: 350px;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #5A80B7;
  color: #fff;
  font-weight: 700;
  padding: 0 20px;
  width: 500px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 1rem;

  @media screen and (max-width: 52em){
    width: auto;
  }
`;

const DetailsOutput = styled.div`
  background: #fff;
  color: #5A80B7;
  font-size: 16px;
  padding: 20px;
  margin-top: -1rem;
  margin-bottom: 1rem;
  max-width: 500px;
  border-radius: 5px;

  @media screen and (max-width: 52em){
    width: auto;
  }
`
const NavBox = styled.div`
  background: #5A80B7;
  color: #ffffff;
  padding: .5rem 1rem;
  border-radius: 5px;
  width: 150px;
  text-align: center;
`;

export {
    LandingContainer,
    NavBox,
    LandingMainBox,
    LandingMainContent,
    MainStory,
    SecondContainer,
    WhatWeDoContainer,
    RequirementContainer,
    ContentCont,
    ContentInfo,
    RequirementDetails,
    DetailsSection,
    DetailsOutput,
    ListContainer,
}