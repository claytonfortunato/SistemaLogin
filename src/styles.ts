import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    width: 100%;
  }
`;

export const header = styled.div`
  h1 {
    text-transform: uppercase;
    margin: 1rem 0rem;
  }

  a {
    text-decoration: none;
    margin: 0.4rem;
    background-color: #333;
    color: #fff;
  }
`;
