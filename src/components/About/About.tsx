import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { AboutTiles } from "./AboutTiles";
import { paragraphs } from "./aboutData";

export const About = () => {
  return (
    <Box component="section" sx={{ py: 12 }} id="about">
      <Container>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  background:
                    "linear-gradient(45deg, #6366f1 30%, #22d3ee 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {paragraphs.p1}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                {paragraphs.p2}
              </Typography>
            </motion.div>
          </Grid>
          <AboutTiles />
        </Grid>
      </Container>
    </Box>
  );
};
