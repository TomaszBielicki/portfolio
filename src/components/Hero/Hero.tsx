import { Box, Container } from "@mui/material";
import { HeroIcon } from "./HeroIcon";
import { HeroTitle } from "./HeroTitle";

export const Hero = () => {
  return (
    <Container>
      <Box
        id="hero"
        sx={{
          minHeight: { md: "100vh" },
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          pt: { xs: 10, sm: 20 },
        }}
      >
        <HeroTitle />
        <HeroIcon />
      </Box>
    </Container>
  );
};
