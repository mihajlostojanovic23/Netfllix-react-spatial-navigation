import React, { useEffect, useRef } from 'react';
import { Field, ErrorMessage } from 'formik';

//Components
import TextError from '../TextError';

//Interface
interface ILogin {
  type: string;
  color: string;
  label: string;
  focused: boolean;
  name: string;
}

function Input({ type, color, label, focused, name }: ILogin) {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [focused]);

  return (
    <div>
      <Field
        name={name}
        id={name}
        innerRef={inputRef}
        type={type}
        placeholder={label}
        className={`text-[${color}] my-[10px] h-[50px] w-[500px] px-[10px] text-[25px] placeholder:text-[20px] placeholder:text-[black] ${
          focused ? 'bg-[#e09c35] text-[black] duration-700' : ''
        }`}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
