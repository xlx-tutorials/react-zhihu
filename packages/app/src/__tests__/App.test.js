import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { App } from 'App'

it('try test', () => {
  render(<div>hello</div>)
  expect(screen.getByText('hello')).toBeInTheDocument()
})

it('should renders correctly', async () => {
  render(<App />)

  expect(screen.getByText('popular')).toBeInTheDocument()

  fireEvent.click(
    screen.getByRole('link', {
      name: /second/i,
    })
  )

  await waitFor(() => {
    expect(screen.getByText(/secondpage/i)).toBeInTheDocument()
  })
})
