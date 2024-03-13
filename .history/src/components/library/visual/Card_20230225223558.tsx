import React from 'react';
import './CardStyle.css';
import "../Characters.css"

interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function Card({
    image = "./src/assets/ricknmorty.png",
    title,
    subtitle,
  }: CardProps) {


  return (

  <div className="cardContainer">
    <div className="cardComponent">
      <img src={image}/>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    
  </div>

  );
};