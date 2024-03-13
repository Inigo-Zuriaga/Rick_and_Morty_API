import React from 'react';
import './Avatar.css';

interface AvatarProps {
  image?: string;
  isDead?: boolean;
}

export default function Avatar({
    image = "./src/assets/ricknmorty.png",
    isDead = false
  }: AvatarProps) {

  return (
    <div className={`avatar ${isDead ? 'dead' : ''}`}>
      <img src={image} alt="avatar" />
    </div>
  );
};

