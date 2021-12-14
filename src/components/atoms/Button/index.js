import React, {memo} from 'react';
import {keyframes} from '@stitches/react';
import {styled} from 'stitches/stitches.config';

const Rotate = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
});

const Spinner = styled('span', {
  color: 'transparent',
  pointerEvents: 'none',
  position: 'relative',
  marginRight: '1.2rem',
  '&:after': {
    content: '',
    animation: `${Rotate} 500ms infinite linear`,
    border: '2px solid #fff',
    borderRadius: '50%',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    height: '1.2em',
    width: '1.2em',
    position: 'absolute',
    left: 'calc(50% - (1.2em / 2))',
    top: 'calc(50% - (1.2em / 2))',
  },
});

export const Box = styled('button', {
  appearance: 'none',
  border: 'none',
  fontSize: '12px',
  borderRadius: '10px',
  paddingX: '23px',
  paddingY: '16px',
  backgroundColor: '$primary',
  color: '#fff',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#605BF7',
    transition: `background-color 400ms `,
    transitionTimingFunction: 'cubic-bezier(0,.60,.25,.1)',
  },
  '&:disabled': {
    backgroundColor: '#9F9CF8',
  },
  '@mobile': {
    fontSize: '11px',
    paddingX: '18px',
    paddingY: '12px',
  },
  variants: {
    variant: {
      alternative: {
        backgroundColor: '$secondary',
        color: '#5953F7',
        '&:hover': {
          backgroundColor: '#D1CEFD',
          color: '#443DF6',
          transition: `all 400ms `,
          transitionTimingFunction: 'cubic-bezier(0,.60,.25,.1)',
        },
        '&:disabled': {
          backgroundColor: '#F5F5FE',
          color: '#A19EFA',
        },
      },
    },
  },
});

export const Button = memo(({children, ...props}) => {
  return (
    <Box {...props}>
      {props.loading && <Spinner />}
      {children}
    </Box>
  );
});
