import React from "react";
import {
  SectionContainer,
  DepartmentContainer,
  AboutUsContainer,
  AboutPsaContainer,
  AboutHeader,
  SectionBody,
  AboutP,
} from "./AboutUs.styled";

const AboutUsPage = () => {
  return (
    <AboutUsContainer>
      <AboutPsaContainer>
        <AboutHeader>
          <h3>About PSA Educational </h3>
          <AboutP>
            <span>PSA Educational</span> is located in Lagos State Nigeria,
            where it started off as an adult literacy center way back in July
            15th, 2006, it added a preparatory center for junior and senior
            school and also a computer training center. Its Head Office located
            at 4, Birrel Avenue, Opposite Magistrate Court, Sabo, Yaba, Lagos
            State, with branch office located at 2, Ondo Close, Off Odolowu
            Street, Ijesha, Surulere, Lagos.
          </AboutP>
        </AboutHeader>
      </AboutPsaContainer>

      <DepartmentContainer>
        <h3>Departments & Sections</h3>
        <SectionBody>
            <section>
                <h3>Administrative Department</h3>
                <p>This department is responsible for the day-to-day operations of an organization and also responsible for training IT/SIWES students and also computer illiterate.</p>
                <h3>Sections</h3>
                <ol>
                    <strong><li>Cyber Café Section:</li></strong>
                    <figcaption>This section provides services to people who do not have access to computers and internet at home. Some of the services rendered are: internet access, computer rental, printing and scanning, photocopying and sending mails.</figcaption> <br />
                    <strong><li>Cyber Café Section:</li></strong>
                    <figcaption>This section provides training to IT/SIWES even computer illiterate. Training they render to students includes- the components of a computer system, basic application packages like the Microsoft Office Package and also teaches students web development..</figcaption>
                </ol>
            </section>
            <section>
                <h3>Student Affairs Department</h3>
                <p>This department is responsible for providing support to students who are struggling academically or personally.</p>
                <h3>Sections</h3>
                <ol>
                    <strong><li>Counselling Section:</li></strong>
                    <figcaption>This section is responsible for helping people explore their interests, identify their skills, and develop a plan for their career. Some of the services this section renders are- helping students explore their interest and values, help students identify their skills and strength, help students develop a career plan and also provide support and guidance in their choice of their career.</figcaption> <br />
                    <strong><li>Tutoring Section:</li></strong>
                    <figcaption>This section is responsible for providing experience and qualified tutors in a specific subject area, that would help students to succeed academically. They offer a variety of tutoring options, such as one-on-one tutoring, group tutoring and online tutoring, depending on the person’s budget.</figcaption>
                </ol>
            </section>
        </SectionBody>
      </DepartmentContainer>
    </AboutUsContainer>
  );
};

export default AboutUsPage;
