import React, { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';

//Interface
interface IHero {
  focused: boolean;
  program: { color: string; title: string };
}

function Hero({ focused, program }: IHero) {
  const { userInfo } = useContext(UserContext);
  console.log(userInfo, 'HOMEPAGE');
  return (
    <div
      className={`relative z-10 flex h-[400px] min-w-[100%] items-center justify-center border-b-[2px] border-[white] text-[50px]  ${
        program
          ? program.color
          : focused
          ? 'bg-[#cecece] text-[black]'
          : 'bg-[black]  text-[white]'
      }   `}
    >
      {/* {program ? `${program.title}` : 'Welcome'}
      {program ? (userInfo ? `Welcome ${userInfo.username}` : ``) : ''} */}
      {program && !userInfo
        ? program.title
        : !program && userInfo
        ? `Welcome, ${userInfo.username}`
        : program
        ? program.title
        : 'Welcome'}
    </div>
  );
}

export default Hero;
