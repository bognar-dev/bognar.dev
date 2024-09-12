import { Button } from "@/components/ui/button";
import { formatDate, getProjects } from "@/app/projects/utils";
import { baseUrl } from "@/app/sitemap";
import { Icons } from "@/components/icons";
import { CustomMDX } from "@/components/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  let projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let project = getProjects().find((project) => project.slug === params.slug)
  if (!project) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  let project = getProjects().find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }
  return (
    <>
      <div className="mb-4 flex justify-center items-center pt-20 xl:absolute xl:top-52 xl:left-12">
        <Button asChild className="bg-primary-400 text-text-700">
          <Link href="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Link>
        </Button>
      </div>
      <section className="flex flex-col items-center justify-center my-20 min-h-screen">

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Project',
              headline: project.metadata.title,
              datePublished: project.metadata.publishedAt,
              dateModified: project.metadata.publishedAt,
              description: project.metadata.summary,
              image: project.metadata.image
                ? `${baseUrl}${project.metadata.image}`
                : `/og?title=${encodeURIComponent(project.metadata.title)}`,
              url: `${baseUrl}/project/${project.slug}`,
              author: {
                '@type': 'Person',
                name: 'Bognar-dev',
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {project.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(project.metadata.publishedAt)}
          </p>

        </div>
        {project.metadata.sourceLink && (
          <Button asChild className="bg-primary-400 text-text-700">
            <Link href={project.metadata.sourceLink} passHref>
              <Icons.gitHub className="w-4 h-4" />
            </Link>
          </Button>
        )}
        <article className="w-full prose prose-pink p-5 max-w-4xl mx-auto ">
          <CustomMDX source={project.content} />

        </article>
      </section>
    </>
  )

}

