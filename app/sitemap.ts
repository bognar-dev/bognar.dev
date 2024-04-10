import { getProjects } from '@/app/projects/utils'

export const baseUrl = 'https://bognar-dev.vercel.app/'

export default async function sitemap() {
    let blogs = getProjects().map((project) => ({
        url: `${baseUrl}/blog/${project.slug}`,
        lastModified: project.metadata.publishedAt,
    }))

    let routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...blogs]
}