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
      requirement: "Passport Photograph | Five (5) O'Level Past Questions | Parents/Guardian Phone Number | Home Address | Writing Materials",
    },
    {
      title: "UTME Classes",
      requirement:
        "Passport Photograph | Four (4) UTME Past questions | Parents/Guardian Phone Number | Home Address | Writing Materials",
    },
    {
      title: "Post UTME Classes",
      requirement: "Passport Photograph | UTME score | Parents/Guardian Phone Number | Home Address | Writing Materials",
    },
    {
      title: "IT/SIWES Placement",
      requirement: "Passport Photograph | SIWES/IT Letter | Parents/Guardian Phone Number | Home Address | Laptop "
    },
  ];

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
        <RequirementContainer>
          <p>Admission Requirement</p>
          <RequirementDetails>
            {data.map((data, index) => {
              return (
                <ReqContent
                  key={index}
                  title={data.title}
                  requirement={data.requirement}
                />
              );
            })}
          </RequirementDetails>
        </RequirementContainer>
      </SecondContainer>
    </LandingContainer>
  );
};

export default Landing;
