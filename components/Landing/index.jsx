import React from 'react'
import Image from 'next/image'

import Banner from '@/public/assets/ban.svg'

import {LandingContainer, LandingMainBox, LandingMainContent, MainStory} from './Landing.styled'

const Landing = () => {
  return (
    <LandingContainer>
      <LandingMainBox>
        <LandingMainContent>
          <Image src={Banner} alt='Banner' />
          <MainStory>
          The purpose of ‘Vine’ is to work with entrepreneurs to nurture and
            build businesses based on godly principles. We believe that
            entrepreneurs can leverage these principles to grow sustainable and
            successful indigenous businesses in Africa.
          </MainStory>
        </LandingMainContent>
        
        </LandingMainBox>
    </LandingContainer>
  )
}

export default Landing