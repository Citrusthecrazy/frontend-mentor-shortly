import styled from "styled-components";

export default styled.p`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.12px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.gray};
  max-width: 540px;
  text-align: center;

  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.11px;
  }
`;
