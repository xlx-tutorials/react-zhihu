import { screen, render } from '@testing-library/react'
import { Button } from '..'

it('should equal 2', () => {
  expect(1 + 1).toBe(2)
})

it('should renders correctly', () => {
  render(<Button>Click Me</Button>)

  const element = screen.getByText(/click me/i)
  expect(element).toBeVisible()

  expect(element).toHaveStyle('color: red;')
})
