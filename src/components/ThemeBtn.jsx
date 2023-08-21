import React from 'react';
import * as B from '@/styles/Button.style';

function ThemeBtn({ name, color, background }) {
  return (
    <B.ThemeButton color={color} background={background}>
      {name}
    </B.ThemeButton>
  );
}

export default ThemeBtn;
