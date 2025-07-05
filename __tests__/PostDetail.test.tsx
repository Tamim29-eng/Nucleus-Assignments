import { render, screen, fireEvent } from '@testing-library/react'
import PostDetail from '../components/PostDetail'

// Sample post
const post = { id: 1, title: 'Test Post', content: 'Sample content' }

test('renders post detail', () => {
  const onClose = jest.fn()
  render(<PostDetail post={post} onClose={onClose} />)
  
  // Check if title and content render
  expect(screen.getByText('Test Post')).toBeInTheDocument()
  expect(screen.getByText('Sample content')).toBeInTheDocument()
})

test('clicking close triggers onClose', () => {
  const onClose = jest.fn()
  render(<PostDetail post={post} onClose={onClose} />)
  
  // Simulate clicking close button
  fireEvent.click(screen.getByText('Close'))
  
  // Verify that onClose was called
  expect(onClose).toHaveBeenCalled()
})
