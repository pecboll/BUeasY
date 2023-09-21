import styled from "styled-components";


export const HeaderContainer = styled.header`
width: 100%;
height: 15rem;
 color: ${(props) => props.theme['space-cadet']};
 font-family: 'roboto', sans-serif;
 border-bottom: 1px solid ${(props) => props.theme["green-700"]};
 border-radius: 8px;

 
`
export const NavContainer = styled.nav`
  height: 2rem;
  display: flex;
  justify-content: flex-end;

  position: sticky;
  top: 0px;

  background-color: ${(props) => props.theme["green-700"]};

  button{
  height: 2rem;
  width: calc(100%/8);

  border: solid 1px transparent;
  color: white;
  background-color: transparent;
  border-radius: 3px;

  margin-bottom: 10px;
 }

 :hover{
    border-color: ${(props) => props.theme["space-cadet"]};
  }
`

export const LogoContainer = styled.header`

height: 15rem;
display: flex;
align-items: center;
 justify-content: center;

img{
  height: 15rem;
 }

`

export const Test = styled.div`
height: 99rem;
width: 3rem;
background-color: red;
`


