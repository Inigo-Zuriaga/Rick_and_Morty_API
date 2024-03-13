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
<div className='cardContainer'>
  <div className='cardRow'>
    {firstRowCards.map(card => (
      <div className='cardDiv'>
        <Card
          key={card.id}
          title={card.name}
          subtitle={card.species}
          image={card.image}
        />
      </div>
    ))}
  </div>
  <div className='cardRow'>
    {secondRowCards.map(card => (
      <div className='cardDiv'>
        <Card
          key={card.id}
          title={card.name}
          subtitle={card.species}
          image={card.image}
        />
      </div>
    ))}
  </div>
</div>

  );
};