import { screen, render } from '@testing-library/react'

it('try test', () => {
  render(<div>hello</div>)
  expect(screen.getByText('hello')).toBeInTheDocument()
})
