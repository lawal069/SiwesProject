import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  color: #ffffff;
  background: #191B1D;
  @media screen and (max-width: 52em) {
    margin: 90px 16px 40px;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  > p {
    margin: 0;
  }
`;

const CopyrightContainer = styled.div`
  display: flex;
  margin-top: auto;
  > p {
    margin: 0;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  @media screen and (max-width: 52em) {
    text-align: start;
    > div {
      margin: 40px 0;
      > p {
        margin: 0;
      }
    }
  }
  > section > p {
    margin: 0;
  }
`;
export {
    FooterContainer,
    ContentContainer,
    CopyrightContainer,
    SocialsContainer,
}