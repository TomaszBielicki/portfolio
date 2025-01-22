import { AppBar, Toolbar, Box, useScrollTrigger } from "@mui/material";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { Navigation } from "./Navigation";

export const Header = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        background: trigger ? "rgba(15, 23, 42, 0.9)" : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Code size={24} />
          </Box>
        </motion.div>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};
