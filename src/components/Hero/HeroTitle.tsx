import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { HeroButtons } from "./HeroButtons";

export const HeroTitle = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography
        variant="h1"
        component={motion.h1}
        sx={{
          background: "linear-gradient(45deg, #6366f1 30%, #22d3ee 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        React Developer
      </Typography>
      <Typography
        variant="h4"
        color="text.secondary"
        sx={{
          maxWidth: "600px",
          fontSize: { xs: "20px", sm: "20px" },
        }}
      >
        Building beautiful and performant web applications with modern
        technologies.
      </Typography>
      <HeroButtons />
    </Box>
  );
};
