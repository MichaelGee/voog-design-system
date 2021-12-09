import React from 'react';
import {Button} from './button';

const ButtonStory = {
  title: 'Components/Atoms/Buttons',
  component: Button,
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Sign in',
};

export default ButtonStory;
