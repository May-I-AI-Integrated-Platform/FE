import Message from '@/component/Message/Message'; // 실제 컴포넌트 경로
import type { Meta, StoryObj } from '@storybook/react';
 
const meta: Meta<typeof Message> = {
  title: 'Chat',
  component: Message,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof Message>;
 
export const Me: Story = {
  args: {
    text: "안녕하세요",
    isMe: true,
  },
};

export const AI: Story = {
  args: {
    text: "안녕하세요! 무엇이 궁금하신가요?",
    isMe: false,
  },
};