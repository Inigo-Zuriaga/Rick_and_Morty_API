import React from 'react';
import './CardStyle.css';


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
<img src={ricknmortypng} className="ricknmortypng" style={{ width: '30%', height: 'auto', display: 'flex', margin: 'auto'}}/>
  <div className="cardContainer">
    <div className="cardComponent">
      <img src={image}/>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    
  </div>

  );
};