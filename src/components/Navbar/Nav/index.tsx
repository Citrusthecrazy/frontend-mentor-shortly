import styled from "styled-components";

export default styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;
