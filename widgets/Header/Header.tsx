import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import { Button, Container } from "../../components";
const Header = () => {
  return (
    <Container className={styles.header}>
      <nav>
        <Image className={styles.logo} src={logo} alt="Shortly logo" />

        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>

      <div>
        <Button variant="text">Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </Container>
  );
};

export default Header;
