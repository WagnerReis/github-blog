import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13rem;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -6rem;

  background-color: ${(props) => props.theme["base-profile"]};

  display: flex;
  align-items: center;
`;

export const ProfileContent = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 10px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  header {
    display: inherit;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      font-size: 24px;
      line-height: 1.3;
      color: ${(props) => props.theme["base-title"]};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${(props) => props.theme.blue};

      svg {
        color: ${(props) => props.theme.blue};
        margin-top: -3px;
      }
    }
  }
`;

export const Description = styled.span`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
  line-height: 1.6;
`;

export const Info = styled.div`
  height: 1.625rem;
  max-width: 100%;

  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme["base-label"]};
    }

    p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;
