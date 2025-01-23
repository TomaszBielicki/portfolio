import { Box, Button } from "@mui/material";
import { buttonsData } from "./heroButtonsData";
import { motion } from "framer-motion";

export const HeroButtons = () => {
  return (
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
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {buttonsData.map((button) => {
          return (
            <Button
              variant={button.variant}
              size={button.size}
              startIcon={button.startIcon}
              href={button.href}
            >
              {button.name}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
