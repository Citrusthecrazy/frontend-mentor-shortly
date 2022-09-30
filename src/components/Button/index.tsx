import styled from "styled-components";

export default styled.button`
  font-weight: 700;
  padding: 0.75em 2em;
  background: ${({ theme }) => theme.colors.cyan};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 28px;
  border: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.cyanHover};
  }
`;
