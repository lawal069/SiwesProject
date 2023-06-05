import { Button } from "@mui/material";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 70px;
  @media screen and (min-width: 52em) {
    display: none;
  }
  @media screen and (max-width: 52em) {
    padding: 0 22px;

    /* border: 1px solid red; */
  }
`;
const HamburgerContainer = styled.div`
  display: flex;
  cursor: pointer;

  /* border: 1px solid red; */
`;
const WebNavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  padding: 19px 60px;
  align-items: center;
  background: #ffffff;
  z-index: 99;
  @media screen and (max-width: 52em) {
    display: none;
  }
`;
const MainLinkContainer = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 50px;
  color: #262c55;
`;
const NavLink = styled.div`
  display: flex;
  cursor: pointer;
  /* color: #262c55; */
  color: ${({ active }) => (active ? "#AB3356" : "")};
`;
const NavBox = styled.div`
  display: flex;
  gap: 22px;
`;
const NavBtnLogin = styled(Button)`
  && {
    padding: 0.5rem 30px;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: none;

    background: rgba(171, 51, 86, 0.04);
    border: 0.5px solid rgba(171, 51, 86, 0.4);
    border-radius: 6px;
    color: #ab3356;
  }
`;
const NavBtnApply = styled(Button)`
  && {
    display: flex;
    background: #ab3356 !important;
    border-radius: 6px;
    padding: 0.5rem 30px;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: none;
  }
`;
export {
  NavBarContainer,
  HamburgerContainer,
  WebNavBarContainer,
  MainLinkContainer,
  NavLink,
  NavBox,
  NavBtnApply,
  NavBtnLogin,
};
