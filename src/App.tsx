import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./styles/theme";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        {/* <Hero />
        <Skills />
        <Projects />
        <Footer /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
