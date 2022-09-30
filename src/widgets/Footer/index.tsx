import React from "react";
import styled from "styled-components";
import { Logo } from "../../components";
import logo from "../../assets/logo-white.svg";
import facebookIcon from "../../assets/icon-facebook.svg";
import instagramIcon from "../../assets/icon-instagram.svg";
import pinterestIcon from "../../assets/icon-pinterest.svg";
import twitterIcon from "../../assets/icon-twitter.svg";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 72px 165px;
  gap: 78px;
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
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo src={logo} />
      <FooterTable>
        <tr>
          <th>Features</th>
          <th>Pricing</th>
          <th>Resources</th>
        </tr>
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
      </FooterTable>
      <Socials>
        <img src={facebookIcon} />
        <img src={twitterIcon} />
        <img src={pinterestIcon} />
        <img src={instagramIcon} />
      </Socials>
    </FooterWrapper>
  );
};

export default Footer;
