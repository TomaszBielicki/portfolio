import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ProjectProps } from "./types";

export const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
  return (
    <Grid item xs={12} md={6} key={index}>
      <Card
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Box>
            <Typography variant="h5" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {project.description}
            </Typography>
          </Box>
          <Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
              {project.technologies.map((tech) => (
                <Chip key={tech} label={tech} size="small" />
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              {project.github ? (
                <IconButton href={project.github} target="_blank">
                  <Github />
                </IconButton>
              ) : null}

              {project.live ? (
                <IconButton href={project.live} target="_blank">
                  <ExternalLink />
                </IconButton>
              ) : null}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
