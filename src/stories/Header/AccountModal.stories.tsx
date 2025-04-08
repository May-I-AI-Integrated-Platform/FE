import AccountModal from '@/component/header/AccountModal'; // 실제 컴포넌트 경로
import type { Meta, StoryObj } from '@storybook/react';
 
const meta: Meta<typeof AccountModal> = {
  title: 'AccountModal',
  component: AccountModal,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof AccountModal>;

export const Modal: Story = {};