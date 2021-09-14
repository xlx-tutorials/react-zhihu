import { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'
import { Button } from '..'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Click Me',
  style: {
    backgroundColor: 'royalblue',
    color: 'white',
  },
}
