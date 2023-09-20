import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defalt";
import { GLobalStyles } from "./styles/global";

export function App() {
	return (
<ThemeProvider theme={defaultTheme}>

  <GLobalStyles />
</ThemeProvider>
  )		
}



