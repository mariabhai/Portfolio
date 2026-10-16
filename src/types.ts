export type Project = {
  id: string
  title: string
  description: string
  image: string
  imageSmall: string
  tags: string[]
  isConcept: boolean
  repoUrl?: string
  liveUrl?: string
}
