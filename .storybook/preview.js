import {addDecorator} from '@storybook/react';
import React from 'react';
import '../src/normalize.css';
import '../src/App.css';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Decorator = (storyFn) => <div style={style}>{storyFn()}</div>;

addDecorator(Decorator);
