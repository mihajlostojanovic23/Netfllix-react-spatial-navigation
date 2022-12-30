import React, { useRef } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

//Data
import { Data } from '../../../../data/Categories';

//Components
import Menu from './Menu';

//Interface
interface IMenuSection {
  focused: boolean;
  hasFocusedChild: boolean;
  onProgramPress: () => {};
  parentFocusKey: string;
  realFocusKey: string;
  setFocus: () => {};
  stealFocus: () => {};
}

const FocusableMenu = withFocusable({
  trackChildren: true,
})(Menu);

function MenuSection(props: IMenuSection) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onCategoryFocused = ({ y }: { y: number }) => {
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateY(-${y}px)`;
      scrollRef.current.style.transition = '300ms';
    }
  };

  return (
    <div ref={scrollRef}>
      {Data.map((menu, index) => (
        <FocusableMenu
          focusKey={`MENU-${index}`}
          onBecameFocused={onCategoryFocused}
          onProgramPress={props.onProgramPress}
          key={menu.id}
          {...menu}
        />
      ))}
    </div>
  );
}

export default MenuSection;
