import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 55rem;
  margin: 0 auto;
  padding: 0 0.5rem;
  position: relative;

  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
  }
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 4.5rem;

  strong {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
    line-height: 1.6;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;
