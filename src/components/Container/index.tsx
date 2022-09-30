import styled from "styled-components";

const Container = styled.div`
  color: ${(props) => props.theme.colors.dark};
  width: 1108px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 375px) {
    width: 327px;
  }
`;

export default Container;
