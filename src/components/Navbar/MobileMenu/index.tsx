import styled from "styled-components";
import { Button } from "../..";

const MobileMenuWrapper = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: -23rem;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  border-radius: 10px;
  padding: 40px 24px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    li {
      text-align: center;
      a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
      }
    }
  }
  height: fit-content;

  @media screen and (min-width: 376px) {
    display: none;
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  height: 1px;
`;

const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <Divider />
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <Button style={{ width: "100%" }}>Sign Up</Button>
        </li>
      </ul>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
