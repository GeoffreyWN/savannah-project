import { render, screen } from '@testing-library/react'

import Landing from './index'

test('renders a login link correctly', () => {
  render(<Landing />)
  const linkElement = screen.getByText(/Login/i)
  expect(linkElement).toBeInTheDocument()
})
