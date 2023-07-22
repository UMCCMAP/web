import React from 'react';
import * as B from '../styles/Button.style';

function CommonBtn({ name, width, color, background, clickEvent, style }) {
  const handleClick = () => {
    clickEvent();
  };

  return (
    <B.CommonButton
      width={width}
      color={color}
      background={background}
      onClick={handleClick}
      style={style}
    >
      {name}
    </B.CommonButton>
  );
}

export default CommonBtn;
