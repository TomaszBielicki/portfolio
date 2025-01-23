import { Box, Typography, Grid, Container } from "@mui/material";
import { projects } from "./projectsData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
      id="projects"
    >
      <Container>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
