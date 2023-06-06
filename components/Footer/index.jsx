import React from 'react'
import Image from 'next/image';
import {Logo} from '@/public/assets/book.svg'
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import {FooterContainer, ContentContainer, CopyrightContainer, SocialsContainer} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <Image src={Logo} width={70} height={40} alt="a" />
        <p>PSA Educational</p>
      </ContentContainer>
      <CopyrightContainer>
        <p>Copyright @PSA Educational, 2022</p>
      </CopyrightContainer>
      <SocialsContainer>
        <div>
          <p>Follow us on our socials</p>
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <section>
          <p>Lagos, Nigeria</p>
          <span>+234 803 338 7492</span>
        </section>
      </SocialsContainer>
    </FooterContainer>
  )
}

export default Footer