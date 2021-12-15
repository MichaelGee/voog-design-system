import React from 'react';
import {Checkbox} from '.';

const CheckboxStory = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CheckBox = Template.bind({});
CheckBox.args = {
  checked: false,
};

export default CheckboxStory;
