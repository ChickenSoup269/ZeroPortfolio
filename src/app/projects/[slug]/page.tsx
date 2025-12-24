import { notFound } from "next/navigation"
import ProjectClientUI from "./ProjectClientUI"
import { projectsData } from "@/lib/projectsData"

interface PageProps {
  params: Promise<{ slug: string }>
}

// --- SERVER COMPONENT (Main Entry) ---
export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return notFound()
  }

  return <ProjectClientUI project={project} />
}
