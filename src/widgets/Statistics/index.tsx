import {
  AccentLine,
  Container,
  FeatureCard,
  Features,
  SectionSubtitle,
  SectionTitle,
  UrlShortener,
  LinkCard,
} from "../../components";
import "../../styles/Statistics.css";
import LinksContext, { LinksContextType } from "../../contexts/LinksContext";
import { useContext } from "react";

const Statistics = () => {
  const { links } = useContext(LinksContext) as LinksContextType;
  return (
    <section className="statistics-wrapper">
      <Container className="statistics-container">
        <UrlShortener />
        {links &&
          links.map((link) => (
            <LinkCard
              key={link.code}
              original_link={link.original_link}
              shortened_link={link.shortened_link}
            />
          ))}
        {!links && <div style={{ marginTop: "96px" }} />}
        {links && <div style={{ marginBottom: "96px" }} />}
        <SectionTitle>Advanced Statistics</SectionTitle>
        <SectionSubtitle style={{ marginTop: "18px" }}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </SectionSubtitle>
        <Features />
      </Container>
    </section>
  );
};

export default Statistics;
