import { Grid, Paper, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { highlights } from "./aboutData";

export const AboutTiles = () => {
  return (
    <Grid item xs={12} md={6}>
      <Grid container spacing={2}>
        {highlights.map((item, index) => (
          <Grid item xs={6} key={item.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                sx={{
                  minHeight: { xs: "270px", sm: "200px", md: "230px" },
                  p: 3,
                  height: "100%",
                  background: "rgba(99, 102, 241, 0.1)",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    background: "rgba(99, 102, 241, 0.15)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
