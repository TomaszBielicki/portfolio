import { AppBar, Toolbar, Button, Box, useScrollTrigger } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Home, User, Briefcase, Mail } from "lucide-react";

const navItems = [
  { label: "Home", icon: <Home size={18} />, target: "home" },
  { label: "About", icon: <User size={18} />, target: "about" },
  { label: "Projects", icon: <Briefcase size={18} />, target: "project" },
];

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
        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                startIcon={item.icon}
                color="inherit"
                sx={{
                  "&:hover": {
                    background: "rgba(99, 102, 241, 0.1)",
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
