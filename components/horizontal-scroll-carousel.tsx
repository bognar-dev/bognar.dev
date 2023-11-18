"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Project } from "@/types/project";
import ProjectPreview from "./project-preview";



 const HorizontalScrollCarousel = ({ projects }: { projects: Project[]}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {projects.map((project:Project) => {
                        return <ProjectPreview  key={project.id} project={project} moreButton={true} admin={false} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};


export default HorizontalScrollCarousel