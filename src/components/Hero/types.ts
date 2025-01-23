import { ReactNode } from "react";

export interface ButtonsProps {
  name: string;
  variant: "text" | "outlined" | "contained";
  size: "small" | "medium" | "large";
  startIcon: ReactNode;
  href: string;
  target?: string;
}
