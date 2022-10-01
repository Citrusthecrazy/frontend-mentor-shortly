import styled from "styled-components";

export default styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors.gray};

  @media screen and (max-width: 375px) {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: 0.12px;
  }
`;
