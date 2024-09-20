import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from '@fromnow/src/components/common/Input';

export default {
  title: 'common/Input',
  components: Input,
  tags: ['autodocs'],
} as Meta<typeof Input>;

export const Basic: StoryFn<typeof Input> = args => <Input {...args} />;
Basic.args = {
  mode: 'black',
  placeholder: '내용을 입력해 주세요.',
  editable: true,
  search: false,
  value: '',
  setValue: () => {},
  onSubmitEditing: () => {},
};
Basic.argTypes = {
  mode: {
    description: '옵션',
  },
  placeholder: {
    description: '옵션',
  },
  editable: {
    description: '옵션',
  },
  search: {
    description: '옵션',
  },
  value: {
    description: '옵션',
  },
  setValue: {
    description: '옵션',
  },
  onSubmitEditing: {
    description: '옵션',
  },
};
