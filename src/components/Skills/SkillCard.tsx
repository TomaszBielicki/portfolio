import { Paper, Box, Typography, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  name: string;
  category: string;
}

export const SkillCard = ({ icon, name, category }: SkillCardProps) => {
  return (
    <Paper
      component={motion.div}
      whileHover={{ y: -5 }}
      sx={{
        p: 3,
        width: "100%",
        background: "rgba(99, 102, 241, 0.1)",
        transition: "all 0.2s",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
          height: 40,
        }}
      >
        <Typography variant="h4" component="span">
          {icon}
        </Typography>
        <Typography variant="h6">{name}</Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={100}
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: "#1e293b",
            "& .MuiLinearProgress-bar": {
              background: "linear-gradient(90deg, #6366f1, #22d3ee)",
              borderRadius: 3,
            },
          }}
        />
      </Box>
    </Paper>
  );
};
