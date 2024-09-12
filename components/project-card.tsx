"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Tag from "./tag";
import Link from "next/link";
import { Project } from "@/app/projects/utils";
import { Icons } from "./icons";
type ProjectProps = {
    project: Project,
    className?: string,
    animate?: boolean
};

export default function ProjectCard({
    project, className, animate = true

}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const linkUrl = project.metadata.noText && project.metadata.websiteLink ? project.metadata.websiteLink.startsWith('http') ? project.metadata.websiteLink : `https://${project.metadata.websiteLink}` : `/projects/${project.slug}`;
    if (animate) {
        return (
            <Link href={linkUrl}>
                <motion.div
                    ref={ref}
                    style={{
                        scale: scaleProgess,
                        opacity: opacityProgess,
                    }}
                    className="group mb-3 sm:mb-8 last:mb-0 "
                >
                    <section className={twMerge(`bg-primary-50 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-primary-200 transition `, className)}>
                        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] grid grid-flow-row h-full sm">
                            <h3 className="text-2xl font-semibold">{project.metadata.title}</h3>
                            <p className="my-2 leading-relaxed text-text-700">
                                {project.metadata.summary}
                            </p>
                            <ul className="flex flex-row md:gap-4 justify-items-start mt-2 gap-1">


                                {project.metadata.tags.split(',').slice(0, 3).map((tag, key) => (
                                    <Tag animate={false} index={key} key={key} tag={tag} colour={""} />
                                ))}


                            </ul>
                            {project.metadata.websiteLink && <Link href={project.metadata.websiteLink} className="flex items-center gap-1 text-sm hover:bg-primary-300 ease-in rounded-md px-2 max-w-fit">
                                Look at it!
                                <Icons.arrowUpRight className="w-3 h-3" />
                            </Link>
                            }

                            <Image
                                src={project.metadata.image!}
                                width={400}
                                height={400}
                                alt={project.metadata.title}
                                quality={95}
                                className="absolute
                    shadow-2xl rounded-lg
                    hidden  
                    md:rounded-t-lg sm:block md:top-8 md:-right-60 md:w-[27.25rem] sm:w-[20.25rem] xs:w-[15.25rem]
                    top-28 -right-10 w-[8.25rem]
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                "
                            />
                        </div>


                    </section>

                </motion.div>
            </Link>
        );
    }

    return (
        <Link href={linkUrl}>
            <div
                ref={ref}
                className="group mb-3 sm:mb-8 last:mb-0"
            >
                <section className={twMerge(`bg-primary-50 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-primary-200 transition `, className)}>
                    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] grid grid-flow-row h-full sm">
                        <h3 className="text-2xl font-semibold">{project.metadata.title}</h3>
                        <p className="my-2 leading-relaxed text-text-700 ">
                            {project.metadata.summary}
                        </p>
                        <div className="flex items-center">
                            <ul className="grid grid-flow-row justify-items-start mt-2 gap-1 sm:mt-auto">


                                {project.metadata.tags.split(',').slice(0, 3).map((tag, key) => (
                                    <Tag index={key} key={key} tag={tag} colour={"primary"} />
                                ))}


                            </ul>
                            {project.metadata.websiteLink && <Link href={project.metadata.websiteLink} className="flex items-center gap-1 text-sm hover:bg-primary-300 ease-in rounded-md px-2 max-w-fit">
                                Look at it!
                                <Icons.arrowUpRight className="w-3 h-3" />
                            </Link>
                            }
                        </div>
                    </div>

                    <Image
                        src={project.metadata.image!}
                        width={400}
                        height={400}
                        alt={project.metadata.title}
                        quality={95}
                        className="absolute
                        shadow-2xl rounded-lg
                        hidden  
                        md:rounded-t-lg sm:block md:top-8 md:-right-60 md:w-[27.25rem] sm:w-[20.25rem] xs:w-[15.25rem]
                        top-28 -right-10 w-[8.25rem]
                        transition 
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-2
                    "
                    />
                </section>

            </div>
        </Link>
    );

}