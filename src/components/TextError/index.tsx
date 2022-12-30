import React from 'react';

function TextError(props: any) {
  return (
    <div className="error w-[500px]  text-left text-[#e09c35]">
      {props.children}
    </div>
  );
}

export default TextError;
