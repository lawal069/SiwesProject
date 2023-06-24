import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

import Arrow from "@/public/assets/arrow.svg";
import Tutoring from "@/public/assets/class.svg";
import Counselling from "@/public/assets/counselling.svg";
import Cafe from "@/public/assets/cafe1.svg";
import Ict from "@/public/assets/ict.svg";
import Admission from "@/public/assets/adm.svg";
import Seek from "@/public/assets/seek.svg";
import ReqContent from "./ReqContent";

import {
  LandingContainer,
  NavBox,
  LandingMainBox,
  RequirementContainer,
  WhatWeDoContainer,
  SecondContainer,
  LandingMainContent,
  ListContainer,
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
      requirement:
        "Passport Photograph | Five (5) O'Level Past Questions | Parents/Guardian Phone Number | Home Address | Writing Materials",
    },
    {
      title: "UTME Classes",
      requirement:
        "Passport Photograph | Four (4) UTME Past questions | Parents/Guardian Phone Number | Home Address | Writing Materials",
    },
    {
      title: "Post UTME Classes",
      requirement:
        "Passport Photograph | UTME score | Parents/Guardian Phone Number | Home Address | Writing Materials",
    },
    {
      title: "IT/SIWES Placement",
      requirement:
        "Passport Photograph | SIWES/IT Letter | Parents/Guardian Phone Number | Home Address | Laptop ",
    },
  ];

  return (
    <LandingContainer>
      <LandingMainBox>
        <LandingMainContent>
          <div>
            <Typewriter
              options={{
                strings: ["PSA EDUCATIONAL", "Adult Literacy & Preparatory Centre"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
            PSA Educational is an educational centre established with the
            purpose of assisting students who want to further their education to
            a higher level and also those who seeks admission placement into
            different higher institutions in Nigeria.
          </p>
          <Link href="/contact-us">
            <NavBox>Contact Us</NavBox>
          </Link>
        </LandingMainContent>
        <Image src={Seek} alt="PSA-Educational" />
      </LandingMainBox>

      <WhatWeDoContainer>
        <h3>What We Offer</h3>
        <ListContainer>
          <Image src={Tutoring} alt="tutor" width={500} height={400} />
          <div>
            <h3>Tutoring</h3>
            <p>
              This section is responsible for providing experience and qualified
              tutors in a specific subject area, that would help students to
              succeed academically. They offer a variety of tutoring options,
              such as one-on-one tutoring, group tutoring and online tutoring,
              depending on the person’s budget.
            </p>
          </div>
        </ListContainer>
        <ListContainer>
          <Image src={Counselling} alt="counselling" width={500} height={300} />
          <div>
            <h3>Counselling</h3>
            <p>
              This section is responsible for helping people explore their
              interests, identify their skills, and develop a plan for their
              career. Some of the services this section renders are- helping
              students explore their interest and values, help students identify
              their skills and strength, help students develop a career plan and
              also provide support and guidance in their choice of their career.
            </p>
          </div>
        </ListContainer>
        <ListContainer>
          <Image src={Ict} alt="ict" width={500} height={300} />
          <div>
            <h3>Computer Training</h3>
            <p>
              This section provides training to IT/SIWES even computer
              illiterate. Training they render to students includes- the
              components of a computer system, basic application packages like
              the Microsoft Office Package and also teaches students web
              development.
            </p>
          </div>
        </ListContainer>
        <ListContainer>
          <Image src={Cafe} alt="counselling" width={500} height={300} />
          <div>
            <h3>Cyber Cafe</h3>
            <p>
              This section provides services to people who do not have access to
              computers and internet at home. Some of the services rendered are:
              internet access, computer rental, printing and scanning,
              photocopying and sending mails.
            </p>
          </div>
        </ListContainer>
      </WhatWeDoContainer>
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
