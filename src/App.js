import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/globalStyles";
import Header from "./Components/header";
import { Container } from "./Components/styles/container.styled"

function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333'
    }
  }

  return (
    <ThemeProvider theme = {theme}>

      <GlobalStyles/>
      <>
        <div className="App">
          <Header />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
