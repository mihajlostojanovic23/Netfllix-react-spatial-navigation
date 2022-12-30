import React, { useEffect } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { useHistory } from 'react-router-dom';

//Data
import { MenuItems } from '../../data/MenuItems';

//Components
import NavItem from './MenuItem';

const FocusableMenuItems = withFocusable({
  trackChildren: true,
})(NavItem);

//Interface
interface ITypes {
  setFocus: () => void;
}

function SideBar({ setFocus }: ITypes) {
  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const history = useHistory();
  return (
    <div className="sidebar fixed top-0 left-0 bottom-0 z-10 flex w-[100px] flex-col items-center justify-center  border-r-[2px] border-r-[white] bg-[#000000]  ">
      {MenuItems.map((items) => (
        <FocusableMenuItems
          key={items.id}
          focusKey={`Item-${items.id}`}
          onEnterPress={() => history.push(`${items.label}`)}
          {...items}
        />
      ))}
    </div>
  );
}

export default SideBar;
