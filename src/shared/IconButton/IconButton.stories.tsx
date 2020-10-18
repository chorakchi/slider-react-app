import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon } from "./../../shared";
import { IconButton } from './IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as Meta;

const Template: Story<any> = (args) => <IconButton {...args} />;

export const Back = Template.bind({});
Back.args = {
  Icon: Icon.back,
};
export const Next = Template.bind({});
Next.args = {
  Icon: Icon.next,
};






