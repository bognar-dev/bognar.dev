// TechStack.js
import React from 'react';// Make sure to use the correct path
import { Icons } from './icons';


const technologies : {name:string,svg:JSX.Element}[] = [
    {
        name: "HTML",
        svg: <Icons.HTML width={50} height={50}/>
    },
    {
        name: "CSS",
        svg: <Icons.CSS width={50} height={50}/>
    },
    {
        name: "JavaScript",
        svg: <Icons.JavaScript width={50} height={50}/>
    },
    {
        name: "React",
        svg: <Icons.React width={50} height={50}/>
    },
    {
        name: "Framer Motion",
        svg: <Icons.framerMotion width={50} height={50}/>
    },
    {
        name: "SolidJs",
        svg:   <Icons.SolidJS width={50} height={50}/>
    },
    {
        name: "Next",
        svg: <Icons.Next width={50} height={50}/>
    },
    {
        name: "Qt",
        svg: <Icons.Qt width={50} height={50}/>
    },
    {
        name: "Tailwind",
        svg: <Icons.Tailwind width={50} height={50}/>
    },
    {
        name: "Golang",
        svg: <Icons.Go width={50} height={50}/> 
    },
    {
        name: "Gin",
        svg: <Icons.Gin width={50} height={50}/> 
    },
    {
        name: "Java ",
        svg: <Icons.Java width={50} height={50}/>
    },
    {
        name: "Python",
        svg: <Icons.Python width={50} height={50}/>
    },
    {
        name: "Assembly",
        svg: <Icons.Assembly width={50} height={50}/>
    },
    {
        name: "VHDL",
        svg: <Icons.VHDL width={50} height={50}/>
    },
    {
        name: "C",
        svg: <Icons.C width={50} height={50}/>
    },
    {
        name: "C++",
        svg:<Icons.CPP width={50} height={50}/>
    },
    {
        name: "SDL",
        svg: <Icons.SDL width={50} height={50}/>
    }
]

const TechStack = () => {
    return (
        <div className="text-center p-4 overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <div className="flex  sm:overflow-x-auto overflow-auto touch-pan-x no-scrollbar space-x-4">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-wrap justify-center items-center">
                        {tech.svg}
                        <p className="text-sm ">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default TechStack;
