import React from 'react';

//Interface
interface IMenuItems {
  label: string;
  image: string;
  id: number;
  focused: boolean;
}

function NavItem({ image, focused }: IMenuItems) {
  return (
    <div>
      <img
        src={image}
        className={`${
          focused ? 'bg-[#e09c35]' : 'bg-[black]'
        } my-[10px] w-[70px] cursor-pointer  rounded-[50%] p-[10px]`}
        alt="Not Found"
      />
    </div>
  );
}

export default NavItem;
