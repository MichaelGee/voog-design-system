import React from 'react';
import {Button} from '.';

const ButtonStory = {
  title: 'Components/Atoms/Buttons',
  component: Button,
};

const Template = (args) => <Button {...args}>{args.text}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  text: "Let's do it",
  variant: '',
  disabled: false,
  loading: false,
};

export default ButtonStory;
