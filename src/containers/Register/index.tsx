import React, { useEffect } from 'react';

//Components
import RegisterForm from './RegisterForm';

interface ITypes {
  setFocus: (focusKey: string) => void;
}

function Register({ setFocus }: ITypes) {
  useEffect(() => {
    setFocus('SideBar');
  }, []);
  return (
    <div className="text-[white]">
      <RegisterForm />
    </div>
  );
}

export default Register;
