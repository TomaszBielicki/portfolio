import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { HeroIcon } from "./HeroIcon";

export const Hero = () => {
  return (
    <Container>
      <Box
        sx={{
          minHeight: { md: "100vh" },
          display: "flex",
          alignItems: "center",
          pt: { xs: 20, sm: 20 },
        }}
      >
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
            sx={{ maxWidth: "600px", fontSize: { xs: "20px", sm: "20px" } }}
          >
            Building beautiful and performant web applications with modern
            technologies.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<Mail />}
              href="mailto:your.email@example.com"
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Github />}
              href="https://github.com/yourusername"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Linkedin />}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <HeroIcon />
        </Box>
      </Box>
    </Container>
  );
};
