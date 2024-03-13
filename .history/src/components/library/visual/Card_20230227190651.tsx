import React from 'react';
import './CardStyle.css';


interface CardProps {
  image?: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function Card({
    image = "",
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