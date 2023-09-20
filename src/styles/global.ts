import { createGlobalStyle } from "styled-components"

export const GLobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
body{
  background-color: ${(props) => props.theme["light-yellow"]};
}
`
