import { GetStaticProps } from 'next'
import { useState } from 'react'
import PostList from '../components/PostList'
import PostDetail from '../components/PostDetail'

type Post = {
  id: number
  title: string
  content: string
}

type Props = {
  posts: Post[]
}

export default function PostsPage({ posts }: Props) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  if (!posts || posts.length === 0) return <p>Loading...</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog Viewer</h1>
      <PostList posts={posts} onSelect={setSelectedPost} />
      {selectedPost && <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts: Post[] = await res.json()
  return { props: { posts } }
}
