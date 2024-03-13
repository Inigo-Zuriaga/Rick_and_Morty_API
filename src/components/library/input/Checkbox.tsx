// Checkbox.tsx
import React, { useState } from "react";
import styles from "./Checkbox.module.css";

interface Props {
  label: string;
}

const Checkbox: React.FC<Props> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={styles.container} style={{ display: 'flex', alignItems: 'center' }}>
    {label}
    <input type="checkbox" checked={checked} onChange={handleChange} />
    <span className={styles.checkmark} />
  </label>
  
  );
};

export default Checkbox;
