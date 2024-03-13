import React from "react";
import Chip from "./Chip";
import styles from "./ChipList.module.css";

export interface ChipListProps {
  items: string[];
  onRemoveItem: (item: string) => void;
}

export default function ChipList({ items, onRemoveItem }: ChipListProps) {
  const handleClick = (text: string) => {
    onRemoveItem(text);
  };

  return (
    <div className={styles.container}>
      {items.map((item) => {
        return <Chip text={item} onClick={handleClick} />;
      })}
    </div>
  );
}
