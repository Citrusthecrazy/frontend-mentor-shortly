import {
  Button,
  Container,
  HeroContent,
  HeroImage,
  HeroImageMobile,
  HeroSubtitle,
  HeroTitle,
} from "../../components";
import "../../styles/Hero.css";
import heroImage from "../../assets/illustration-working.svg";
import styled from "styled-components";

const HeroButton = styled(Button)`
  margin-top: 38px;
  font-size: 20px;

  @media screen and (max-width: 375px) {
    align-self: center;
  }
`;

const Hero = () => {
  return (
    <Container className="hero-container">
      <HeroImageMobile src={heroImage} alt="woman working" />
      <HeroContent>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroSubtitle style={{ marginTop: "5px" }}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </HeroSubtitle>
        <HeroButton>Get Started</HeroButton>
      </HeroContent>
      <HeroImage src={heroImage} alt="woman working" />
    </Container>
  );
};

export default Hero;
