import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Button";

type Props = {
  original_link: string;
  shortened_link: string;
};

const LinkCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 24px;
  padding-top: 18px;
  padding-bottom: 18px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 16px;
    padding-top: 6px;
  }
`;

const OriginalLink = styled.span`
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.dark};
`;

const Divider = styled.hr`
  display: none;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  opacity: 0.35;
  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const ShortenedLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 375px) {
    width: 100%;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`;

const ShortenedLink = styled.span`
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.cyan};
`;

const CopyButton = styled(Button)<{ isCopied: boolean }>`
  border-radius: 5px;
  font-size: 15px;
  background-color: ${({ theme, isCopied }) =>
    isCopied ? theme.colors.purple : theme.colors.cyan};
  &:hover {
    background-color: ${({ theme, isCopied }) =>
      isCopied ? theme.colors.purple : theme.colors.hoverCyan};
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

const LinkCard = (props: Props) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(props.shortened_link);
    setIsLinkCopied(true);
  };
  return (
    <LinkCardWrapper>
      <OriginalLink>{props.original_link}</OriginalLink>
      <Divider />
      <ShortenedLinkGroup>
        <ShortenedLink>{props.shortened_link}</ShortenedLink>
        <CopyButton onClick={() => copyToClipboard()} isCopied={isLinkCopied}>
          {isLinkCopied ? "Copied!" : " Copy"}
        </CopyButton>
      </ShortenedLinkGroup>
    </LinkCardWrapper>
  );
};

export default LinkCard;
