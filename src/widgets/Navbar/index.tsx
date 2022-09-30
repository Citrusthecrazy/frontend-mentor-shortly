import {
  Container,
  Logo,
  MobileMenuButton,
  Nav,
  NavLink,
  SignUpButton,
  UserActions,
  NavWrapper,
  MobileMenu,
} from "../../components";
import logo from "../../assets/logo.svg";
import "../../styles/Navbar.css";
import hamburger from "../../assets/hamburger.svg";
import { useState } from "react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };
  return (
    <Container className="nav-container">
      <NavWrapper>
        <Logo src={logo} alt="logo" />
        <Nav>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Resources</NavLink>
        </Nav>
      </NavWrapper>
      <UserActions>
        <NavLink href="#">Login</NavLink>
        <SignUpButton>Sign Up</SignUpButton>
      </UserActions>
      <MobileMenuButton src={hamburger} onClick={() => toggleMobileMenu()} />
      {isMobileMenuOpen && <MobileMenu />}
    </Container>
  );
};
export default Navbar;
