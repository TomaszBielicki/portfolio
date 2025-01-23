import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const SliderControls = ({ onPrev, onNext }: SliderControlsProps) => (
  <>
    <IconButton
      onClick={onPrev}
      sx={{
        backgroundColor: "background.paper",
        "&:hover": { backgroundColor: "primary.main" },
        zIndex: 2,
      }}
    >
      <ChevronLeft />
    </IconButton>

    <IconButton
      onClick={onNext}
      sx={{
        backgroundColor: "background.paper",
        "&:hover": { backgroundColor: "primary.main" },
        zIndex: 2,
      }}
    >
      <ChevronRight />
    </IconButton>
  </>
);
