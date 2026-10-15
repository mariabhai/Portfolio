export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  isConcept: boolean
  repoUrl?: string
  liveUrl?: string
}
