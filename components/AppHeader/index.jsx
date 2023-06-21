import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/assets/logo.svg'
import MobileNav from "../MobileNav";
import Hamburger from '../../public/assets/hamburger.svg'

import {WebNavBarContainer, NavBarContainer, MainLinkContainer, NavLink, NavBox, HamburgerContainer} from './AppHeader.styled'

const AppHeader = () => {

  const [showRightDrawer, setShowRightDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <WebNavBarContainer>
      <Link href="/">
        <Image src={Logo} alt="Logo" width={80} height={80} />
      </Link>

      <MainLinkContainer>
        <Link href='/about-us'>
          <NavLink>About PSA Educational</NavLink>
        </Link>
        <Link href='/contact-us'>
          <NavLink>Contact Us</NavLink>
        </Link>
        <Link href='/enroll'>
          <NavBox>
            Enroll For Tutorial
          </NavBox>
        </Link>
      </MainLinkContainer>
    </WebNavBarContainer>

    <NavBarContainer>
      <Image width={90} height={50} src={Logo} alt={"logo"} />

      <HamburgerContainer onClick={() => setShowRightDrawer(true)}>
        <Image width={40} height={30} src={Hamburger} alt={"logo"} />
      </HamburgerContainer>
      <MobileNav
        showRightDrawer={showRightDrawer}
        closeRightDrawer={() => setShowRightDrawer(false)}
      />
    </NavBarContainer>

    </>
  )
}

export default AppHeader