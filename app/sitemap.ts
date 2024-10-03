import { MetadataRoute } from 'next'
import { getProjects } from '@/app/projects/utils'

const baseUrl = 'https://bognar.co.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const routes = ['', '/projects', '/biography', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...projects]
}