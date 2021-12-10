import * as React from 'react';

const SvgTick = (props) => (
  <svg
    width='1em'
    height='1em'
    viewBox='0 0 18 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      d='m1 6.5 5 5L16.5 1'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default SvgTick;
