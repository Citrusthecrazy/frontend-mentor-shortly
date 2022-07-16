import Image from "next/image";
import React from "react";
import { Button, Container } from "../../components";
import styles from "./Hero.module.scss";
import illustration from "../../assets/illustration-working.svg";
const Hero = () => {
  return (
    <Container className={styles.hero}>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button variant="primary">Get Started</Button>
      </div>
      <Image
        className={styles.illustration}
        src={illustration}
        alt="Working woman"
      />
    </Container>
  );
};

export default Hero;
