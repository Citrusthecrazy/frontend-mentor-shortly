import styled from "styled-components";

export default styled.a`
  color: ${(props) => props.theme.colors.gray};
  font-size: 15px;
  font-weight: 500;
  line-height: 22.5px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.dark};
  }
`;
