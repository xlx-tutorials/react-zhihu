import { Meta, Story } from '@storybook/react'
import { ComponentProps } from 'react'
import { Button } from '..'

type TemplateProps = ComponentProps<typeof Button> & {
  backgroundColor: string
  color: string
}

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click Me',
    backgroundColor: '#06f',
    color: 'white',
  },
} as Meta<TemplateProps>

// eslint-disable-next-line react/prop-types
const Template: Story<TemplateProps> = ({
  backgroundColor,
  color,
  ...args
}) => (
  <Button
    style={{
      backgroundColor,
      color,
    }}
    {...args}
  />
)

export const Basic = Template.bind({})
