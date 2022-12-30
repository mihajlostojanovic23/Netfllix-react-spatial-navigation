import React, { useRef } from 'react';
import Card from './Card';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Interface
interface IMenu {
  id: number;
  title: string;
  programs: [IPrograms];
  onProgramPress: () => {};
}

interface IPrograms {
  id: string;
  title: string;
  color: string;
}

const FocusableCard = withFocusable()(Card);

function Menu({ id, title, programs, onProgramPress }: IMenu) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onProgramFocused = ({ x }: { x: number }) => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(-${x}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };
  return (
    <div className="h-[250px] w-[100%]" ref={scrollRef}>
      <span className="ml-[10px] text-[20px]"> {title}</span>
      <div className="flex">
        {programs.map((program: IPrograms, index: number) => (
          <FocusableCard
            focusKey={`card-${id}-${program.id}`}
            {...program}
            key={program.id}
            {...program}
            onEnterPress={onProgramPress}
            onBecameFocused={onProgramFocused}
            programIndex={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
