import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.cyan};
  height: 4px;
  z-index: 0;
  transform: translateY(250px);
`;
