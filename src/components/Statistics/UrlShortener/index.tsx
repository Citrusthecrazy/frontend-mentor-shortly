import axios from "axios";
import styled from "styled-components";
import { Button } from "../..";
import shortenerBg from "../../../assets/bg-shorten-desktop.svg";
import { useContext, useState } from "react";
import LinksContext, { LinksContextType } from "../../../contexts/LinksContext";

const UrlShortenerWrapper = styled.form`
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

  @media screen and (max-width: 375px) {
    flex-direction: column;
    padding: 24px;
    max-width: 327px;
  }
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

  @media screen and (max-width: 375px) {
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
    }
  }
`;

const ShortenButton = styled(Button)`
  border-radius: 10px;
  height: 64px;
  font-size: 18px;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

const UrlShortener = () => {
  const [linkToShorten, setLinkToShorten] = useState("");
  const { links, setLinks } = useContext(LinksContext) as LinksContextType;

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${linkToShorten}`)
      .then((res) => {
        const { code, original_link, short_link } = res.data.result;
        if (links) {
          setLinks([
            ...links,
            { code, original_link, shortened_link: short_link },
          ]);
        } else
          setLinks([{ code: code, original_link, shortened_link: short_link }]);
      })
      .catch((e) => console.log(e));

    setLinkToShorten("");
  };

  return (
    <UrlShortenerWrapper onSubmit={(e) => handleOnSubmit(e)}>
      <ShortenerInput
        placeholder="Shorten a link here..."
        value={linkToShorten}
        onChange={(e) => setLinkToShorten(e.target.value)}
      />
      <ShortenButton type="submit">Shorten It!</ShortenButton>
    </UrlShortenerWrapper>
  );
};

export default UrlShortener;
