import { NextApiRequest, NextApiResponse } from 'next'

const posts = [
  { id: 1, title: 'React Basics', content: 'React is a JS library...' },
  { id: 2, title: 'Understanding Next.js', content: 'Next.js extends React...' },
  { id: 3, title: 'Testing with Jest', content: 'Jest is a test framework...' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(posts)
}
