import React, { useEffect } from 'react';
import LoginForm from './LoginForm';

interface ISetFocus {
  setFocus: (item: string) => {};
}
function Login({ setFocus }: ISetFocus) {
  useEffect(() => {
    setFocus('Item-4');
  }, []);
  return (
    <div className="my-[30px] flex items-center justify-center text-center  text-[white]">
      <div className="flex h-[90vh] items-center">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
