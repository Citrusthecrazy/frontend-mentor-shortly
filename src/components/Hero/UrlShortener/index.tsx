import React from "react";
import styled from "styled-components";
import { Button } from "../..";
import shortenerBg from "../../../assets/bg-shorten-desktop.svg";
const UrlShortenerWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url(${shortenerBg}) no-repeat;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  background-size: cover;
  border-radius: 10px;
  padding: 64px 52px;
  max-width: 1110px;
  top: 0;
  transform: translateY(-50%);
  gap: 24px;
`;

const ShortenerInput = styled.input`
  width: 100%;
  height: 64px;
  padding: 16px 24px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.colors.white};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const ShortenButton = styled(Button)`
  border-radius: 10px;
  height: 64px;
`;

const UrlShortener = () => {
  return (
    <UrlShortenerWrapper>
      <ShortenerInput placeholder="Shorten a link here..." />
      <ShortenButton>Shorten It!</ShortenButton>
    </UrlShortenerWrapper>
  );
};

export default UrlShortener;
