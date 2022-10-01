import React from "react";
import styled from "styled-components";
import { Container, Logo } from "../../components";
import logo from "../../assets/logo-white.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";
import twitterIcon from "../../assets/icon-twitter.svg";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 72px 165px;
  gap: 78px;

  @media screen and (max-width: 375px) {
    padding: 72px 35px;
  }
`;

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterTable = styled.table`
  border-collapse: collapse;
  width: 461px;
  th {
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.25px;
    padding-bottom: 22px;
  }
  td {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.cyan};
    }
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
    th {
      padding-bottom: 16px;
    }
    td {
      font-size: 14px;
      padding-bottom: 16px;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: flex-start;
  img {
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 375px) {
    align-items: center;
    justify-content: center;
    jusitfy-self: center;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Logo src={logo} />
        <FooterTable>
          <thead>
            <tr>
              <th>Features</th>
              <th>Pricing</th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Link Shortening</td>
              <td>Blog</td>
              <td>About</td>
            </tr>
            <tr>
              <td>Branded Links</td>
              <td>Developers</td>
              <td>Our Team</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Support</td>
              <td>Careers</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Contact</td>
            </tr>
          </tbody>
        </FooterTable>
        <Socials>
          <img src={facebookIcon} />
          <img src={twitterIcon} />
          <img src={pinterestIcon} />
          <img src={instagramIcon} />
        </Socials>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
