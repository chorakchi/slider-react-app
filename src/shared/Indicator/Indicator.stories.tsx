import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Indicator } from './Indicator';

export default {
  title: 'Example/Indicator',
  component: Indicator,
} as Meta;

const Template: Story<any> = (args) => <Indicator {...args} />;

export const IndicatorWith4Item = Template.bind({});
IndicatorWith4Item.args = {
    length: 4,
  onSelect: ()=>{},
  selected: 1,
};
export const IndicatorWith10Item = Template.bind({});
IndicatorWith10Item.args = {
    length: 10,
  onSelect: ()=>{},
  selected: 4,
};






