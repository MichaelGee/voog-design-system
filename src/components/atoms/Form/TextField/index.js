import React from 'react';
import {styled} from 'stitches/stitches.config';
import Box from 'ui-box';

const InputGroup = styled('div', {
  width: '100%',
  position: 'relative',
  border: '1px solid #EFEFEF',
  borderRadius: '4px',
  padding: '11px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    borderColor: '#CCCCCC',
  },
  '&:focus-within': {
    borderColor: '$primary',
  },
  variants: {
    variant: {
      error: {
        borderColor: '$error',
        '&:focus-within': {
          borderColor: '$error',
        },
        '&:hover': {
          borderColor: '$error',
        },
      },
    },
  },
});

const Input = styled('input', {
  border: 'none',
  width: '100%',
  color: '#8D9091',
  fontSize: '12px',
  lineHeight: '1.4375em',
  '&:focus': {
    color: '$black',
    '&:not(:placeholder-shown) ~ label': {
      padding: '0px 8px',
      top: '-9px',
      left: '7px',
      bottom: 'auto',
      fontSize: '12px',
      transition: 'all 0.2s ease-in-out',
      padding: '0px 6px',
      color: '$primary',
      backgroundColor: '$white',
    },
  },
  variants: {
    variant: {
      error: {
        '&:focus': {
          borderColor: '$error',
          '&:not(:placeholder-shown) ~ label': {
            color: '$error',
            fontWeight: '800',
            fontSize: '12px',
          },
        },
      },
    },
  },
});

const Label = styled('label', {
  position: 'absolute',
  backgroundColor: 'transparent',
  padding: '0.6rem 1rem',
  lineHeight: '1.4375em',
  top: '0',
  left: '0',
  bottom: '0',
  color: '#8D9091',
  variants: {
    variant: {
      error: {
        color: '$error',
      },
    },
  },
});

const Error = styled('p', {
  color: '$error',
  fontSize: '12px',
  marginLeft: '8px',
  marginTop: '8px',
});

const Info = styled('p', {
  color: '#8D9091',
  fontSize: '12px',
  marginLeft: '8px',
  marginTop: '8px',
});

export const TextField = (props) => {
  return (
    <Box width='100%'>
      <InputGroup variant={props.error && 'error'}>
        <Input variant={props.error && 'error'} type={props.type} {...props} />
        <Label variant={props.error && 'error'}>{props.label}</Label>
      </InputGroup>
      {props.error && <Error>{props.error}</Error>}
      {props.info && !props.error && <Info>{props.info}</Info>}
    </Box>
  );
};
