import { Box, Typography, Container } from "@mui/material";
import { SkillSlider } from "./SkillSlider";

export const Skills = () => {
  return (
    <Box component="section" sx={{ py: 8 }} id="skills">
      <Container>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Skills
        </Typography>
        <SkillSlider />
      </Container>
    </Box>
  );
};
