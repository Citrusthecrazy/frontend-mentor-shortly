import React from "react";
import styled from "styled-components";
import ctaBg from "../../assets/bg-boost-desktop.svg";
import { Button } from "../../components";

const CtaWrapper = styled.section`
  background: url(${ctaBg}) no-repeat;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({ theme }) => theme.colors.white};
  padding: 57px 0px;

  @media screen and (max-width: 375px) {
    padding: 90px 35px;
  }
`;

const CtaTitle = styled.h2`
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 48px;

  @media screen and (max-width: 375px) {
    font-size: 28px;
    line-height: 48px;
    letter-spacing: -0.7px;
    text-align: center;
    white-space: nowrap;
  }
`;

const CtaButton = styled(Button)`
  font-size: 20px;
`;

const CTA = () => {
  return (
    <CtaWrapper>
      <CtaTitle>Boost your links today</CtaTitle>
      <CtaButton>Get Started</CtaButton>
    </CtaWrapper>
  );
};

export default CTA;
