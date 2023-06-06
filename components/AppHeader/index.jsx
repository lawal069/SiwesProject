import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {NavBarContainer, MainLinkContainer, NavLink, NavBox} from './AppHeader.styled'

const AppHeader = () => {
  return (
    <NavBarContainer>
      <Link href="/">
        <Image src="" alt="Logo" />
      </Link>

      <MainLinkContainer>
        <Link href='/about-us'>
          <NavLink>About PSA Educational</NavLink>
        </Link>
        <Link href='/about-us'>
          <NavLink>Contact Us</NavLink>
        </Link>
        <Link href='/enroll'>
          <NavBox>
            Enroll
          </NavBox>
        </Link>
      </MainLinkContainer>
    </NavBarContainer>
  )
}

export default AppHeader