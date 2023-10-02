import { NavLink, Outlet } from "react-router-dom";
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
    <NavLink to="/">Produtos</NavLink>
    <NavLink to="/cart">Carrinho</NavLink>
    <NavLink to="/settings" >Configuracão</NavLink>
    </NavContainer>
    <Outlet />
    <Test />
    </>
  )
}