import ChatInput from '@/component/Message/MessageInput'; // 실제 컴포넌트 경로
import type { Meta, StoryObj } from '@storybook/react';
 
const meta: Meta<typeof ChatInput> = {
  title: 'ChatInput',
  component: ChatInput,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof ChatInput>;
 
export const Primary: Story = {};