import { Outlet } from "react-router-dom";
import { HeaderContainer ,LogoContainer, NavContainer, Test } from "./styles";
import logobueasy from "../assets/logobueasy.png"

export function DefaultLayout() {
  return(
    <>
    <HeaderContainer>
      
    <LogoContainer>
    <img src={logobueasy} alt="" /> 
    </LogoContainer>
    </HeaderContainer>
    <NavContainer>
    <button>carrinho</button>
    <button>configuracão</button>
    <button>carrinho</button>
    <button>carrinho</button>
    </NavContainer>
    <Outlet />
    <Test />
    </>
  )
}