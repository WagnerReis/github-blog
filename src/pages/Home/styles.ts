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

export const CardGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  margin-top: 3rem;
  margin-bottom: 10rem;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
    transition: border 0.2s;
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;

    strong {
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.25rem;
      line-height: 1.6;

      max-width: 16rem;
      overflow-wrap: break-word;
      word-break: break-word;
      white-space: normal;
    }

    div {
      span {
        color: ${(props) => props.theme["base-span"]};
        font-size: 14px;
        line-height: 1.6;
      }
    }
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 16px;
    line-height: 1.6;

    max-width: 22rem;
    margin-top: 1.25rem;
  }
`;
