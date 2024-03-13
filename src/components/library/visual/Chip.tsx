import React, { MouseEventHandler } from "react";
import styles from "./Chip.module.css";
import { X } from "lucide-react";

export interface ChipProps {
  text: string;
  onClick: (text: string) => void;
  variant: "filled" | "outlined";
}

export default function Chip({ text, onClick, variant = "filled" }: ChipProps) {
  const handleClick = () => {
    onClick(text);
  };

  const getBackgroundColor = () => {
    if (variant === "filled") {
      return "#e1f8dc";
    } else {
      return "#FFFFFF";
    }
  };

  return (
    <div
      className={styles.chip}
      style={{
        backgroundColor: getBackgroundColor(),
      }}
    >
      <span>{text}</span>
      <button onClick={handleClick}>
        <X color="#00b0c8" size="19" />
      </button>
    </div>
  );
}
