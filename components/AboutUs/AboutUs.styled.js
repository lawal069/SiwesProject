import { Button } from "@mui/material";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
const AboutPsaContainer = styled.div`
  display: flex;
  padding: 20px 100px;
  background: transparent;
  @media screen and (max-width: 52em) {
    flex-direction: column;
    padding: 0 16px;
  }
`;
const AboutP = styled.p`
  max-width: 900px;
  line-height: 30px;
  text-align: center;
  margin: 50px auto;
  box-shadow: 0px 0px 40px 2px rgba(38, 44, 85, 0.12);
  border-radius: 5px;
  padding: 42px;
  background: #ffffff;
  >span{
    color: #5a80b7;
    font-weight: 700;
  }
`;
const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > h3 {
    color: #a369de;
    font-weight: 700;
    font-size: 38px;
    margin: 0 auto;
    text-align: center;
    @media screen and (max-width: 52em) {
      font-size: 24px;
    }
  }
`;
const DepartmentContainer = styled.div`
  width: 100%;
  padding: 4rem;
  box-sizing: border-box;
  margin: 0 auto;
  background: #A369DE;
  color: #fff;
  font-size: 18px;
  > h3{
    text-align: center;
    font-size: 24px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 52em){
    padding: 0;
  }
`;
const SectionBody= styled.div`
  width: 100%;
  gap: 100px;
  /* color: #5A80B7; #A369DE; #191B1D; */
  color: #191B1D;
  > section{
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 40px 2px rgba(38, 44, 85, 0.12);
    margin-bottom: 20px;

    @media screen and (max-width: 52em) {
      width: 100%;
    }
  }

  @media screen and (max-width: 52em) {
      padding: 0 16px;
    }
`;
const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SectionOutput = styled.div`
    color: black;

`;
export {
  AboutUsContainer,
  AboutPsaContainer,
  AboutHeader,
  AboutP,
  DepartmentContainer,
  SectionContainer,
  SectionBody,
  SectionOutput,
};