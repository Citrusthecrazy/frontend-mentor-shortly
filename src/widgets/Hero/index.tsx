import {
  Button,
  Container,
  HeroContent,
  HeroImage,
  HeroSubtitle,
  HeroTitle,
} from "../../components";
import "../../styles/Hero.css";
import heroImage from "../../assets/illustration-working.svg";
const Hero = () => {
  return (
    <Container className="hero-container">
      <HeroContent>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroSubtitle style={{ marginTop: "5px" }}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </HeroSubtitle>
        <Button style={{ marginTop: "38px", fontSize: "20px" }}>
          Get Started
        </Button>
      </HeroContent>
      <HeroImage src={heroImage} alt="woman working" />
    </Container>
  );
};

export default Hero;
