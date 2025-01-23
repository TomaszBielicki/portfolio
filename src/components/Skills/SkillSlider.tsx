// import { useState } from "react";
// import { Box, IconButton, Grid } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SkillCard } from "./SkillCard";
// import { skills } from "./skillsData";

// export const SkillSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const totalSkills = skills.length;

//   const nextSkill = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % totalSkills);
//   };

//   const prevSkill = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
//   };

//   const visibleSkills = [
//     skills[currentIndex],
//     skills[(currentIndex + 1) % totalSkills],
//     skills[(currentIndex + 2) % totalSkills],
//     skills[(currentIndex + 3) % totalSkills],
//   ];

//   return (
//     <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <IconButton
//           onClick={prevSkill}
//           sx={{
//             backgroundColor: "background.paper",
//             "&:hover": { backgroundColor: "primary.main" },
//           }}
//         >
//           <ChevronLeft />
//         </IconButton>

//         <Box sx={{ flex: 1, overflow: "hidden" }}>
//           <AnimatePresence initial={false} mode="wait">
//             <motion.div
//               key={currentIndex}
//               custom={direction}
//               initial={{ x: direction * 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//             >
//               <Grid container spacing={2}>
//                 {visibleSkills.map((skill, index) => (
//                   <Grid
//                     item
//                     xs={12}
//                     sm={6}
//                     md={3}
//                     key={`${skill.name}-${index}`}
//                   >
//                     <motion.div
//                       initial={{ y: 20, opacity: 1 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <SkillCard {...skill} />
//                     </motion.div>
//                   </Grid>
//                 ))}
//               </Grid>
//             </motion.div>
//           </AnimatePresence>
//         </Box>

//         <IconButton
//           onClick={nextSkill}
//           sx={{
//             backgroundColor: "background.paper",
//             "&:hover": { backgroundColor: "primary.main" },
//           }}
//         >
//           <ChevronRight />
//         </IconButton>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           gap: 1,
//           mt: 3,
//         }}
//       >
//         {skills.map((_, index) => (
//           <Box
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1);
//               setCurrentIndex(index);
//             }}
//             sx={{
//               width: 8,
//               height: 8,
//               borderRadius: "50%",
//               backgroundColor:
//                 currentIndex === index ? "primary.main" : "background.paper",
//               cursor: "pointer",
//               transition: "all 0.2s",
//               "&:hover": {
//                 backgroundColor: "primary.main",
//               },
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };
import { useState } from "react";
import { Box, IconButton, Grid, useTheme, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { skills } from "./skillsData";

export const SkillSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSkills = skills.length;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Sprawdza, czy ekran jest mniejszy niż "sm"

  const nextSkill = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSkills);
  };

  const prevSkill = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  };

  // Jeśli ekran jest mały, pokaż 2 elementy, jeśli większy, pokaż 4
  const visibleSkillsCount = isSmallScreen ? 2 : 4;

  // Wybiera odpowiednią liczbę elementów na podstawie szerokości ekranu
  const visibleSkills = [...Array(visibleSkillsCount).keys()].map(
    (i) => skills[(currentIndex + i) % totalSkills]
  );

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          onClick={prevSkill}
          sx={{
            backgroundColor: "background.paper",
            "&:hover": { backgroundColor: "primary.main" },
          }}
        >
          <ChevronLeft />
        </IconButton>

        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <Grid container spacing={2}>
                {visibleSkills.map((skill, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={`${skill.name}-${index}`}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 1 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <SkillCard {...skill} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Box>

        <IconButton
          onClick={nextSkill}
          sx={{
            backgroundColor: "background.paper",
            "&:hover": { backgroundColor: "primary.main" },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 3,
        }}
      >
        {skills.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? "primary.main" : "background.paper",
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": {
                backgroundColor: "primary.main",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
