import styled from "styled-components";
import { Container } from "../../components";
import logo from "../../assets/logo.svg";
const Logo = styled.img`
  width: 120px;
  height: 32px;
  color: ${(props) => props.theme.colors.dark};
  margin-right: 3rem;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: 45px;
  align-items: center;
  gap: 30px;
`;
const NavLink = styled.a`
  color: ${(props) => props.theme.colors.gray};
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.dark};
  }
`;

const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`;

const SignUpButton = styled.button`
  background: ${(props) => props.theme.colors.cyan};
  border-radius: 28px;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.cyanHover};
  }
  transition: all 0.15s ease-in-out;
`;

const Navbar = () => {
  return (
    <Container
      style={{
        paddingTop: "3rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Nav>
        <Logo src={logo} alt="logo" />
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Resources</NavLink>
      </Nav>
      <UserActions>
        <NavLink href="#">Login</NavLink>
        <SignUpButton>Sign Up</SignUpButton>
      </UserActions>
    </Container>
  );
};
export default Navbar;
