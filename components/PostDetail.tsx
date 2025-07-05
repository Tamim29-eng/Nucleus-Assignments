type Post = {
  id: number
  title: string
  content: string
}

type Props = {
  post: Post
  onClose: () => void
}

export default function PostDetail({ post, onClose }: Props) {
  return (
    <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}
