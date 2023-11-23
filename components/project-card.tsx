"use client";
import { Project } from "@/types/project";
import { useRef } from "react";
import { timeLineData } from "@/public/data/timeline";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Tag from "./tag";
import Button from "./button";
import Link from "next/link";

type ProjectProps = {
    project: Project,
    className?: string
};

export default function ProjectCard({
    project, className

}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <Link href={`/projects/${project.id}`}>
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className={twMerge(`bg-accent-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-accent-200 transition `,className)}>
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] grid grid-flow-row h-full sm">
                     <h3 className="text-2xl font-semibold">{project.data.name}</h3>
                    <p className="my-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {project.data.description}
                    </p>
                    <ul className="grid grid-flow-row justify-items-start mt-2 gap-1 sm:mt-auto">


                        {project.data.tags.map((tag, key) => (
                            <Tag key={key} tag={tag} colour={"secondary"} />
                        ))}
                        

                    </ul>
                    
                </div>

                <Image
                    src={project.data.image}
                    width={400}
                    height={400}
                    alt={project.data.name}
                    quality={95}
                    className="absolute
                    shadow-2xl rounded-lg
                    md:rounded-t-lg md:block md:top-8 md:-right-60 md:w-[28.25rem]
                    top-28 -right-10 w-[10.25rem]
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                "
                />
                </section>
           
        </motion.div>
        </Link>
    );
}