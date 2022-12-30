import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import MenuSection from './MenuSection';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const KEY_ENTER = 'enter';

//Interface
interface IProgram {
  color: string;
  focusKey: string;
  focused: boolean;
  hasFocusedChild: boolean;
  id: number;
  parentFocusKey: string;
  programIndex: number;
  realFocusKey: string;
  setFocus: () => {};
  stealFocus: () => {};
  title: string;
}

interface IPressKey {
  [KEY_ENTER]: number | string;
}
interface ITypes {
  setFocus: (item: string) => void;
}

const FocusableMenuSection = withFocusable({
  trackChildren: true,
})(MenuSection);

const FocusableHero = withFocusable()(Hero);

function MainSection({ setFocus }: ITypes) {
  useEffect(() => {
    setFocus('Item-1');
  }, [setFocus]);
  const [currentProgram, setCurrentProgram] = useState<IProgram>();

  const onProgramPress = (programProps: IProgram, pressedKeys: IPressKey) => {
    if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
      return;
    }
    setCurrentProgram(programProps);
  };

  return (
    <div className=" min-w-[100%] text-[white] ">
      <FocusableHero program={currentProgram} focusKey={'Hero'} />
      <FocusableMenuSection onProgramPress={onProgramPress} />
    </div>
  );
}

export default MainSection;
