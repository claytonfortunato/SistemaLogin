import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 800px;

  margin-top: 20px;
  border-radius: 10px;
  background-color: #ddd;

  h2 {
    text-align: center;
  }

  input {
    font-size: 22px;
    border-radius: 10px;
    margin: 1rem;
    outline: none;
    border: 1px solid #222;
    padding: 6px;
  }

  button {
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 20px;
    width: 100px;
    border-radius: 10px;
    transition: 0.3s;
    margin-bottom: 10px;
    &:hover {
      background-color: #222;
      color: #fff;
    }
  }
`;
