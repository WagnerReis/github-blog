import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { IssuesContextProvider } from "./contexts/IssuesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <IssuesContextProvider>
          <Router />
        </IssuesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
