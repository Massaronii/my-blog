type Content = {
  type: "paragraph" | "link"
  content: string
}

export type PostProps = {
  id: number
  content: Content[]
  publishedAt: Date
}
