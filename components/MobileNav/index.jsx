import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import {
  StyledDrawer,
  StyledSideDrawer,
  CloseIconContainer,
  SideNavLinkContainer,
  SideNavLink,
  MobileAccordion,
  SideNavBox,
  SideNavBtnLogin,
  SideNavBtnApply,
} from "./MobileNav.styled";
import Image from "next/image";
import Logo from "../../public/assets/logo.svg";

const MobileSideNav = ({ showRightDrawer, closeRightDrawer }) => {
  return (
    <StyledDrawer open={showRightDrawer} anchor="left">
      <StyledSideDrawer>
        <CloseIconContainer>
          <Link href="/" passHref>
            <Image
              onClick={closeRightDrawer}
              src={Logo}
              width={90}
              height={60}
              alt="a"
            />
          </Link>
          <CloseIcon onClick={closeRightDrawer} />
        </CloseIconContainer>
        <SideNavLinkContainer>
          <Link href="/" passHref>
            <SideNavLink>Home</SideNavLink>
          </Link>
          <Link href="/about-us" passHref>
            <SideNavLink>About PSA Educational</SideNavLink>
          </Link>
          <Link href="/contact-us" passHref>
            <SideNavLink>Contact Us </SideNavLink>
          </Link>
          <SideNavBox>
            <Link href='/enroll' passHref>
            <SideNavBtnLogin>Enroll For 
            Tutorial</SideNavBtnLogin>
            </Link>
            
          </SideNavBox>
        </SideNavLinkContainer>
      </StyledSideDrawer>
    </StyledDrawer>
  );
};

export default MobileSideNav;