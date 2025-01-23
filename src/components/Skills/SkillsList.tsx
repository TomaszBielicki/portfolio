import { Box, Container } from "@mui/material";
import { skills } from "./skillsData";
import { SkillCard } from "./SkillCard";

export const SkillList = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {skills.map(({ icon, name, category }) => {
        return <SkillCard icon={icon} name={name} category={category} />;
      })}
    </Container>
  );
};
