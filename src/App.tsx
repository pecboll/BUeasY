import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defalt";
import { GLobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
	return (
<ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  <GLobalStyles />
</ThemeProvider>
  )		
}



