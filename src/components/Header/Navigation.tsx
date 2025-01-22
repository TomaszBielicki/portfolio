import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { navItems } from "./navData";
import { Link as ScrollLink } from "react-scroll";

export const Navigation = () => {
  return (
    <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 2 } }}>
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ScrollLink to={item.target} smooth={true} duration={500}>
            <Button
              startIcon={item.icon}
              color="inherit"
              sx={{
                "&:hover": {
                  background: "rgba(99, 102, 241, 0.1)",
                },
              }}
            >
              <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
                {item.label}
              </Typography>
            </Button>
          </ScrollLink>
        </motion.div>
      ))}
    </Box>
  );
};
