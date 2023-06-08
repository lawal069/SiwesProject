import React from "react";
import Image from "next/image";

import Banner from "@/public/assets/ban.svg";

import ReqContent from "./ReqContent";

import {
  LandingContainer,
  LandingMainBox,
  RequirementContainer,
  WhatWeDoContainer,
  SecondContainer,
  LandingMainContent,
  MainStory,
  ContentCont,
  ContentInfo,
  DetailsSection,
  RequirementDetails,
  DetailsOutput,
} from "./Landing.styled";

const Landing = () => {

  const data = [
    {
      title: "O'Level Classes",
      requirement: "Passport"
    },
    {
      title: "UTME Classes",
      requirement: "Passport"
    },
    {
      title: "Post UTME Classes",
      requirement: "Passport"
    },
  ]

  return (
    <LandingContainer>
      <LandingMainBox>
        <LandingMainContent>
          <Image src={Banner} alt="Banner" />
          <MainStory>
            PSA Educational is an educational centre established with the
            purpose of assisting students who want to further their education to
            a higher level and also those who seeks admission placement into
            different higher institutions in Nigeria.
          </MainStory>
        </LandingMainContent>
      </LandingMainBox>
      <SecondContainer>
        <WhatWeDoContainer>
          <p>What we do</p>
          <ContentCont></ContentCont>
        </WhatWeDoContainer>
        <RequirementContainer>
          <p>Admission Requirement</p>
          <RequirementDetails>
            {data.map((data, index) => {
              return <ReqContent key={index} title={data.title} requirement={data.requirement} />;
            })}
          </RequirementDetails>
        </RequirementContainer>
      </SecondContainer>
    </LandingContainer>
  );
};

export default Landing;
