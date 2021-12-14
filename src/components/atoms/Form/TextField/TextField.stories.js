import React from 'react';
import {TextField} from '.';

const TextFieldStory = {
  title: 'Components/Atoms/Input',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  label: 'Email',
  error: '',
};

export default TextFieldStory;
