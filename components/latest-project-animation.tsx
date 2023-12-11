"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { Project, Projects } from '@/types/project';
import React from 'react';
import ProjectCard from './project-card';
const fadeInAnimationVariants = {
    initial: {
        opacity: 0.1,
        y: 10,
        x: 10
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delay: 0.3 * index,
        },
    }),
};

const LatestProjectAnimation = ({ data }: {data : Projects }) => {
    return(
    <AnimatePresence>
        <div className='grid lg:grid-cols-2 lg:grid-rows-1 gap-3  '>
            {data.map((project: Project, key: number) => (
                < motion.div

                    key={key}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    custom={key}
                >
                    <ProjectCard animate={false} project={project} key={key} className='' />
                </motion.div>
            ))}
        </div>
    </AnimatePresence>
    )
};

export default LatestProjectAnimation;
