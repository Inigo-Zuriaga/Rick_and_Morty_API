import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Snackbar.css";

interface Props {
  title?: string;
  description?: string;
}

export default function Snackbar({
  title = "Title",
  description = "Description",
}: Props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="container">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="snackbar"
          >
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <button onClick={handleClose}>Close</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
