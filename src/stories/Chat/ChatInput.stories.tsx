import MessageInput from '@/component/Message/MessageInput'; // 실제 컴포넌트 경로
import type { Meta, StoryObj } from '@storybook/react';
 
const meta: Meta<typeof MessageInput> = {
  title: 'ChatInput',
  component: MessageInput,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof MessageInput>;
 
export const Primary: Story = {};