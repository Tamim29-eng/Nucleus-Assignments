import { render, screen, fireEvent } from '@testing-library/react'
import PostList from '../components/PostList'

// Sample data for test
const posts = [{ id: 1, title: 'Test Post', content: 'Sample content' }]

test('renders post titles', () => {
  const onSelect = jest.fn()
  render(<PostList posts={posts} onSelect={onSelect} />)
  
  // Check if post title is rendered
  expect(screen.getByText('Test Post')).toBeInTheDocument()
})

test('clicking post calls onSelect', () => {
  const onSelect = jest.fn()
  render(<PostList posts={posts} onSelect={onSelect} />)
  
  // Simulate clicking on post title
  fireEvent.click(screen.getByText('Test Post'))
  
  // Verify that onSelect was called with correct post data
  expect(onSelect).toHaveBeenCalledWith(posts[0])
})
