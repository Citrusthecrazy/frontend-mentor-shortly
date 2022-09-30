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
import brandRecognitionIcon from "../../assets/icon-brand-recognition.svg";
import detailedRecordsIcon from "../../assets/icon-detailed-records.svg";
import fullyCustomizableIcon from "../../assets/icon-fully-customizable.svg";
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
        <Features>
          <FeatureCard
            icon={brandRecognitionIcon}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
          <FeatureCard
            icon={detailedRecordsIcon}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            style={{ marginTop: "88px" }}
          />
          <FeatureCard
            icon={fullyCustomizableIcon}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            style={{ marginTop: "196px" }}
          />
          <AccentLine />
        </Features>
      </Container>
    </section>
  );
};

export default Statistics;
