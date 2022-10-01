import styled from "styled-components";
import { AccentLine, FeatureCard } from "../..";
import brandRecognitionIcon from "../../../assets/icon-brand-recognition.svg";
import detailedRecordsIcon from "../../../assets/icon-detailed-records.svg";
import fullyCustomizableIcon from "../../../assets/icon-fully-customizable.svg";

const FeaturesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 92px;
    margin-top: 92px;
  }
`;

const Features = () => {
  return (
    <FeaturesWrapper>
      <FeatureCard
        icon={brandRecognitionIcon}
        title="Brand Recognition"
        description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />
      <FeatureCard
        icon={detailedRecordsIcon}
        title="Detailed Records"
        description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        marginTop="88px"
      />
      <FeatureCard
        icon={fullyCustomizableIcon}
        title="Fully Customizable"
        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        marginTop="196px"
      />
      <AccentLine />
    </FeaturesWrapper>
  );
};

export default Features;
