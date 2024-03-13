import React from 'react';
import { motion } from 'framer-motion';
import './List.module.css';

type ListItem = {
  label: string;
  value: string;
};

type ListProps = {
  items: ListItem[];
};

const List = ({ items }: ListProps) => {
  return (
    <div className="listContainer">
      <motion.ul>
        {items.map((item, index) => (
          <motion.li
            key={index}
          >
            <label>{item.label}:</label> <p>{item.value}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default List;
