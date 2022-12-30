import React from 'react';

interface IButton {
  text: string;
  focused: boolean;
  formik?: {
    values: object;
    errors: object;
    status: undefined;
    isSubmitting: boolean;
    isValid: boolean;
  };
  disabled: boolean;
}

function Button({ text, focused, disabled }: IButton) {
  return (
    <button
      type="submit"
      className={`my-[15px] h-[50px]  text-[25px] ${
        focused ? ` bg-[#e09c35] text-[black]` : `bg-[white]  text-[black]`
      } w-[200px] rounded-[10px] hover:bg-[#c58a32] `}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
