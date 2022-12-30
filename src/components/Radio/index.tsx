import React from 'react';

interface IRadio {
  ime: string;
  focused: boolean;
}

function Radio({ ime, focused }: IRadio) {
  console.log(ime);
  return (
    <div>
      <div className={`${focused ? 'h-[50px] w-[50px] bg-[red]' : ''}`}>
        <input type="radio" />
      </div>
    </div>
  );
}

export default Radio;
