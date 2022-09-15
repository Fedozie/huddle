import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/globalStyles";
import Header from "./Components/header";
import Card from "./Components/card";
import { Container } from "./Components/styles/container.styled";
import Footer from "./Components/footer";
import content from "./content"

function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333'
    },
    mobile: '768px'
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
