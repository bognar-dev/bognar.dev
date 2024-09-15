"use client";

import { useRef } from "react";
import { timeLineData } from "@/public/data/timeline";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof timeLineData)[number];

export default function TimelineEvent({
    title, text, date, tag, link,image
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0 hover:cursor-pointer"
        >
            <section className="bg-primary-50 min-w-[20rem] sm:min-w-[40rem] max-w-[40rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-primary-200 transition sm:group-even:pl-8 ">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="sm:text:lg md:text-xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-text-700 ">
                        {text}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">

                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "

                        >
                            {tag}
                        </li>
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "

                        >
                            {date}
                        </li>

                    </ul>
                </div>

                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={title}
                    quality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl bg-accent-50
                    transition 
                    group-hover:scale-[1.04]
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2

                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2

                    group-even:right-[initial] group-even:-left-40"
                />
            </section>
        </motion.div>
    );
}