import { Button } from "@mui/material";
import styled from "styled-components";

const EnrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 70px;
  background: #A369DE;
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
`;

const EnrollBody = styled.form`
  display: flex;
    flex-direction: column;
    color: #ffffff;
    @media screen and (max-width: 52em) {
      width: 100%;
      padding: 0 20px;
    }
    > input {
      width: 100%;
      outline: none;
      padding: 16px;
      border-radius: 8px;
      border: none;
      margin-bottom: 20px;
      @media screen and (max-width: 52em) {
        width: 100%;
      }
    }
    > h3 {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 10px;
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
    
    > textarea {
      outline: none;
      border-radius: 8px;
      padding: 16px;
      border: 2px solid #A369DE;
    }
`;

const InputCont = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 52em){
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  > input {
      width: 350px;
      outline: none;
      padding: 16px;
      border-radius: 8px;
      border: none;
      margin-bottom: 20px;
      @media screen and (max-width: 52em) {
        width: 100%;
      }
    }
`
const MsgBtn = styled(Button)`
  && {
    margin: 33px 0;
    text-transform: none;
    color: #fff;
    background: #5a80b7 !important;
    border-radius: 8px;
    padding: 16px 0;
    font-size: 20px;
  }
`;

export {
  EnrollContainer,
  EnrollBody,
  InputCont,
    MsgBtn,
}