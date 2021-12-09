import {styled} from '../stitches/stitches.config';

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  lineHeight: 1,
  fontSize: '13px',
  height: '24px',
  borderRadius: '999999px',
  padding: '0 10px',
  backgroundColor: '#443DF6',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#605BF7',
  },
});
