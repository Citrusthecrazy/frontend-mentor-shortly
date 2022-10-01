import styled from "styled-components";

export default styled.h2`
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 48px;

  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 28px;
    line-height: 48px;
    letter-spacing: -0.7px;
  }
`;
