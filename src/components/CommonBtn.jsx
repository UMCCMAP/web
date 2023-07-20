import React from 'react';
import * as B from '../styles/Button.style';

// eslint-disable-next-line react/prop-types
function CommonBtn({ name, width, color, background }) {
  return (
    <B.CommonButton width={width} color={color} background={background}>
      {name}
    </B.CommonButton>
  );
}

export default CommonBtn;
