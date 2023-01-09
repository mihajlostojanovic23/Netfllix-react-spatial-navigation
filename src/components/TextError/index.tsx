import React from 'react';

interface TextErrorProps {
  children: React.ReactNode;
}

function TextError(props: any) {
  const { children } = props;
  console.log(children, 'TEXT');

  return (
    <div className="error w-[500px]  text-left text-[#e09c35]">{children}</div>
  );
}

export default TextError;
