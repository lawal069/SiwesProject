import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #191B1D;
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 70px;
  padding: 0 4rem;
  color: #ffffff;
  @media screen and (min-width: 52em) {}
  @media screen and (max-width: 52em) {}
`;
const HamburgerContainer = styled.div`
  display: flex;
  cursor: pointer;
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
  color: #ffffff;
`;
const NavBox = styled.div`
  display: flex;
  gap: 22px;
  background: #5A80B7;
  color: #ffffff;
  padding: .5rem 2rem;
  border-radius: 5px;
`;
export {
  NavBarContainer,
  HamburgerContainer,
  WebNavBarContainer,
  MainLinkContainer,
  NavLink,
  NavBox,
};
