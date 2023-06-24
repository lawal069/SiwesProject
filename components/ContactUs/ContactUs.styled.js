import { Button } from "@mui/material";
import styled from "styled-components";

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-top: 70px;
  background: #A369DE;
  > h3 {
    text-transform: uppercase;
    font-size: 30px;
  }
  > img {
    margin-top: auto;
    margin-left: -90px;
  }
  @media screen and (max-width: 52em) {
    > img {
      display: none;
    }
  }
  
  > form {
    display: flex;
    flex-direction: column;
    color: #fff;
    @media screen and (max-width: 52em) {
      width: 100%;
      padding: 0 20px;
    }
    > h3 {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 40px;
      margin-bottom: 30px;
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
      border: 2px solid #fff;
      margin-bottom: 33px;
      background: #fff;
      color: #000;
      @media screen and (max-width: 52em) {
        width: 100%;
      }
    }
    > textarea {
      outline: none;
      border-radius: 8px;
      padding: 16px;
      border: 2px solid #A369DE;
      background: #fff;
      border: 2px solid #fff;
    }
  }
`;
const MsgBtn = styled(Button)`
  && {
    margin: 33px 0;
    text-transform: none;
    color: #fff;
    background: #5A80B7 !important;
    border-radius: 8px;
    padding: 16px 0;
    font-size: 20px;
  }
`;

export {
    ContactUsContainer,
    MsgBtn,
}