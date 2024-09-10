"use client"
import { AnimatePresence } from 'framer-motion';
import { Project } from '../app/projects/utils';
import { MotionDiv } from './motion-div';
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

const LatestProjectAnimation = ({ projects }: { projects: Project[] }) => {
    return (
        <AnimatePresence>
            <div className='grid lg:grid-cols-2 lg:grid-rows-1 gap-1 w-full '>
                {projects.map((project: Project, key: number) => (
                    < MotionDiv

                        key={key}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        custom={key}
                    >
                        <ProjectCard animate={false} project={project} key={key} className='' />
                    </MotionDiv>
                ))}
            </div>
        </AnimatePresence>
    )
};

export default LatestProjectAnimation;
