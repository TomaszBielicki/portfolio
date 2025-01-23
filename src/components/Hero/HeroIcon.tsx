import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Code, Terminal, Laptop } from "lucide-react";

export const HeroIcon = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "relative",
        width: "300px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component={motion.div}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid",
          borderColor: "primary.main",
          borderTopColor: "transparent",
        }}
      />
      <Box sx={{ position: "relative", display: "flex", gap: 2 }}>
        <motion.div
          animate={{
            y: [-10, 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Code size={40} color="#6366f1" />
        </motion.div>
        <motion.div
          animate={{
            y: [10, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Terminal size={40} color="#22d3ee" />
        </motion.div>
        <motion.div
          animate={{
            y: [-10, 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Laptop size={40} color="#6366f1" />
        </motion.div>
      </Box>
    </Box>
  );
};
