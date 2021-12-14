import {createStitches} from '@stitches/react';

export const {styled} = createStitches({
  theme: {
    colors: {
      primary: '#443DF6',
      secondary: '#ECEBFE',
      black: '#000000',
      white: '#FFFFFF',
      error: '#C5292A',
    },
    fontSizes: {},
  },
  utils: {
    paddingX: (value) => ({paddingRight: value, paddingLeft: value}),
    paddingY: (value) => ({paddingTop: value, paddingBottom: value}),
    marginX: (value) => ({marginRight: value, marginLeft: value}),
    marginY: (value) => ({marginTop: value, marginBottom: value}),
  },
  media: {
    desktop: '(max-width: 1024px)',
    tablet: '(max-width: 767px)',
    mobile: '(max-width: 480px)',
  },
});
