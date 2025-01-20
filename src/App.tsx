import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./styles/theme";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
