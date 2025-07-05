type Post = {
  id: number
  title: string
  content: string
}

type Props = {
  posts: Post[]
  onSelect: (post: Post) => void
}

export default function PostList({ posts, onSelect }: Props) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <button onClick={() => onSelect(post)}>{post.title}</button>
        </li>
      ))}
    </ul>
  )
}
