import styled from "styled-components";

export const HeaderContainer = styled.main`
  width: 54rem;
  height: 10.5rem;
  margin: 0 auto;
  padding: 2rem;
  margin-top: -5rem;
  position: relative;

  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  border-radius: 10px;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: 1.3;
    margin-top: 1.25rem;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    gap: 3.5px;
    color: ${(props) => props.theme.blue};
    height: 19px;
    cursor: pointer;

    background: transparent;
    border: none;

    svg {
      border-radius: 20px;
      line-height: 0;
    }

    p {
      font-size: 12px;
      line-height: 1.6;
      font-weight: bold;
    }
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
`;

export const Info = styled.div`
  height: 1.625rem;
  max-width: 100%;

  margin-top: 0.75rem;

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
      color: ${(props) => props.theme["base-span"]};
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;
