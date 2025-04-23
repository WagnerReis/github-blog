import styled from "styled-components";

export const CardContainer = styled.button`
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
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

    text-align: left;
  }
`;
