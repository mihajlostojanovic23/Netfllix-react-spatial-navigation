import React from 'react';

interface ISettings {
  id: number;
  label: string;
  focused: boolean;
  correct: string;
}

function SettingItem({ id, label, focused, correct }: ISettings) {
  return (
    <div className="my-[15px] flex items-center text-[white]">
      <span className={`${focused ? 'border-[red]' : ''} text-[35px]`}>
        {label}
      </span>

      <div
        className={`${
          focused ? 'border-[#e09c35]' : ''
        } ml-[30px] h-[30px] w-[30px] border-[4px] border-[white]`}
      >
        {correct === label ? (
          <span className="flex items-center justify-center">X</span>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
} //${focused ? 'bg-[red]' : ''}

export default SettingItem;
