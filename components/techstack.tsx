"use client";

import { motion } from "framer-motion";
import { Icons } from './icons';




const technologies: { name: string, svg: JSX.Element }[] = [

    {
        name: "React",
        svg: <Icons.React width={20} height={20} />
    },
    {
        name: "Tailwind",
        svg: <Icons.Tailwind width={20} height={20} />
    },
    {
        name: "Framer Motion",
        svg: <Icons.framerMotion width={20} height={20} />
    },
    {
        name: "SolidJs",
        svg: <Icons.SolidJS width={20} height={20} />
    },
    {
        name: "Next",
        svg: <Icons.Next width={20} height={20} />
    },

    {
        name: "Golang",
        svg: <Icons.Go width={20} height={20} />
    },
    {
        name: "Gin",
        svg: <Icons.Gin width={20} height={20} />
    },
    {
        name: "Java ",
        svg: <Icons.Java width={20} height={20} />
    },
    {
        name: "Python",
        svg: <Icons.Python width={20} height={20} />
    },
    {
        name: "Assembly",
        svg: <Icons.Assembly width={20} height={20} />
    },
    {
        name: "VHDL",
        svg: <Icons.VHDL width={20} height={20} />
    },
    {
        name: "C",
        svg: <Icons.C width={20} height={20} />
    },
    {
        name: "C++",
        svg: <Icons.CPP width={20} height={20} />
    },
    {
        name: "Qt",
        svg: <Icons.Qt width={20} height={20} />
    },
    {
        name: "SDL",
        svg: <Icons.SDL width={20} height={20} />
    }
]


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function TechStack() {

    return (
        <section
            id="skills"
            className="text-center"
        >
            <h2 className="text-3xl mb-4">What I like to use:</h2>
            <ul className="flex flex-wrap justify-center  gap-2 text-lg p-5 m-5">
                {technologies.map((tech, index) => (
                    <motion.li
                        className="flex flex-wrap justify-center items-center gap-3 bg-primary-100 border-primary-500 rounded-xl px-5 py-3 hover:rotate-3"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >
                        {tech.svg}
                        <p className="text-sm ">{tech.name}</p>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}