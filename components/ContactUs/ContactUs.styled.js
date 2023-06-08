import { Button } from "@mui/material";
import styled from "styled-components";

const ContactUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 70px;
  background: #ffffff;
  gap: 150px;
  > img {
    margin-top: auto;
    margin-left: -90px;
  }
  @media screen and (max-width: 52em) {
    > img {
      display: none;
    }
  }
  
  > div {
    display: flex;
    flex-direction: column;
    color: #A369DE;
    @media screen and (max-width: 52em) {
      width: 100%;
      padding: 0 20px;
    }
    > h3 {
      font-weight: 700;
      font-size: 40px;
      margin-bottom: 0;
      @media screen and (max-width: 52em) {
        font-size: 24px;
      }
    }
    > p {
      font-weight: 400;
      font-size: 20px;
      margin-top: 0;
      @media screen and (max-width: 52em) {
        font-size: 16px;
      }
    }
    > input {
      width: 600px;
      outline: none;
      padding: 16px;
      border-radius: 8px;
      border-bottom: 2px solid #A369DE;
      border: 2px solid #A369DE;
      margin-bottom: 33px;
      @media screen and (max-width: 52em) {
        width: 100%;
      }
    }
    > textarea {
      outline: none;
      border-radius: 8px;
      padding: 16px;
      border: 2px solid #A369DE;
    }
  }
`;
const MsgBtn = styled(Button)`
  && {
    margin: 33px 0;
    text-transform: none;
    color: #fff;
    background: #A369DE !important;
    border-radius: 8px;
    padding: 16px 0;
    font-size: 20px;
  }
`;

export {
    ContactUsContainer,
    MsgBtn,
}