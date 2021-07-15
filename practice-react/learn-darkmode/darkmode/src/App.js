import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from './theme/GlobalStyle';
import Tab from './Tab';
import Loading from "./components/Loading";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<Loading />}>
          <Tab />
          <RootRouter />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

