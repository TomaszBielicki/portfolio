import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SkillSlider } from "./SkillSlider";
import { SkillList } from "./SkillsList";

export const Skills = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="section" sx={{ py: 8 }} id="skills">
      <Container>
        <Typography variant="h2" sx={{ mb: 4 }}>
          Skills
        </Typography>
        {isSmallScreen ? <SkillList /> : <SkillSlider />}
      </Container>
    </Box>
  );
};
