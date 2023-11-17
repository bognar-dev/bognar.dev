"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Icons } from "./icons";



const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "95"]);

  return (
    <section ref={targetRef} className="text-center p-4 overflow-hidden">
          <h2 className="text-3xl pb-3">What I like to use:</h2>
      <div className="flex  sm:overflow-x-auto overflow-auto touch-pan-x space-x-4">
        <motion.div style={{ x }} className="flex gap-4">
        {technologies.map((tech, index) => (
                    <TechCard key={index} index={index} tech={tech}/>
                ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechCard = ({ index,tech }:{index:number,tech: {name:string,svg:JSX.Element}}) => {
  return (
    <div key={index} className="flex flex-wrap justify-center items-center select-none">
                        {tech.svg}
                        <p className="text-sm ">{tech.name}</p>
                    </div>
  );
};

export default HorizontalScrollCarousel;


const technologies : {name:string,svg:JSX.Element}[] = [
    {
        name: "SDL",
        svg: <Icons.SDL width={50} height={50}/>
    },
    {
        name: "C++",
        svg: <Icons.CPP width={50} height={50}/>
    },
    {
        name: "C",
        svg: <Icons.C width={50} height={50}/>
    },
    {
        name: "VHDL",
        svg: <Icons.VHDL width={50} height={50}/>
    },
    {
        name: "Assembly",
        svg: <Icons.Assembly width={50} height={50}/>
    },
    {
        name: "Python",
        svg: <Icons.Python width={50} height={50}/>
    },
    {
        name: "Java ",
        svg: <Icons.Java width={50} height={50}/>
    },
    {
        name: "Gin",
        svg: <Icons.Gin width={50} height={50}/>
    },
    {
        name: "Golang",
        svg: <Icons.Go width={50} height={50}/> 
    },
    {
        name: "Tailwind",
        svg: <Icons.Tailwind width={50} height={50}/>
    },
    {
        name: "Next",
        svg: <Icons.Next width={50} height={50}/>
    },
    {
        name: "SolidJs",
        svg: <Icons.SolidJS width={50} height={50}/>
    },
    {
        name: "Framer Motion",
        svg: <Icons.framerMotion width={50} height={50}/>
    },
    {
        name: "React",
        svg: <Icons.React width={50} height={50}/>
    },
    {
        name: "JavaScript",
        svg: <Icons.JavaScript width={50} height={50}/>
    },
    {
        name: "CSS",
        svg: <Icons.CSS width={50} height={50}/>
    },
    {
        name: "HTML",
        svg: <Icons.HTML width={50} height={50}/>
    },
]
