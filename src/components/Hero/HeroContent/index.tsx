import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 564px;
  @media screen and (max-width: 375px) {
    flex-direction: column;
    min-width: 327px;
  }
`;
