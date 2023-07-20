import React from 'react';
import * as B from '../styles/Button.style';

// eslint-disable-next-line react/prop-types
function ThemeBtn({ name, color, background }) {
  return (
    <B.ThemeButton color={color} background={background}>
      {name}
    </B.ThemeButton>
  );
}

export default ThemeBtn;
