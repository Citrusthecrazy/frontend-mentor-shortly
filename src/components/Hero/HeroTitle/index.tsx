import styled from "styled-components";

export default styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 90px;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.colors.dark};

  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 42px;
    line-height: 48px;
    letter-spacing: -1.05px;
  }
`;
