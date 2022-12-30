import React from 'react';

//Interface
interface ICard {
  id: string;
  title: string;
  color: string;
  focused: boolean;
}

function Card({ title, color, focused }: ICard) {
  return (
    <div>
      <div
        className={`card mx-[10px] flex h-[200px] w-[200px] items-center justify-center  text-[20px] text-[black] ${color} ${
          focused ? `border-[5px] border-[#a80909]` : color
        } 
        }`}
      >
        {title}
      </div>
    </div>
  );
}

export default Card;
