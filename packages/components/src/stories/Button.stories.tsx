import { Meta, Story } from '@storybook/react'
import { Button } from '..'

type ButtonProps = React.ComponentProps<typeof Button>

export default {
  title: 'Components/Buttons',
  component: Button,
  args: {
    children: 'Click Me',
  },
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({})
