import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
