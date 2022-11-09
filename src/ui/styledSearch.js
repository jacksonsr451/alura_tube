import styled from "styled-components"

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.border};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  margin-right: 15px;
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${(props) => props.theme.colors.secundary};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${(props) => props.theme.colors.border};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`