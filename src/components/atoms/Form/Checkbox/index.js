import {Check} from 'Icons/Svgr';
import {styled} from 'stitches/stitches.config';

const StyledCheckbox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '26px',
  width: '26px',
  border: '1px solid #CCCCCC',
  borderRadius: '4px',
  cursor: 'pointer',
  variants: {
    variant: {
      checked: {
        borderColor: '$primary',
      },
    },
  },
});

export const Checkbox = ({checked}) => {
  return <StyledCheckbox variant={checked && 'checked'}>{checked && <Check />}</StyledCheckbox>;
};
