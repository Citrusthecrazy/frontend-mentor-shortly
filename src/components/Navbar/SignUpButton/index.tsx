import styled from "styled-components";

export default styled.button`
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
