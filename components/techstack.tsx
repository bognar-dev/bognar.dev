// TechStack.js
import React from 'react';// Make sure to use the correct path


const technologies = [
    {
        name: "HTML",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect></svg>`
    },
    {
        name: "CSS",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect></svg>`
    },
    {
        name: "JavaScript",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>`
    },
    {
        name: "React",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#61DAFB"><path d="M0 0h48v48H0z" fill="none"></path><path fill="#61DAFB" d="M37 20h-6v6h-4v-6h-6v-4h6v-6h4v6h6z"></path></svg>`
    },
    {
        name: "Framer Motion",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#00F1C1"><g fill="none" stroke="#00F1C1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M32 62l10-10M22 52l10-10M42 52l-10-10M52 42L42 32M12 22l10-10M2 32l10-10M32 2l10 10M42 12l10 10"></path></g></svg>`
    },
    {
        name: "SolidJs",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#D4A93B"><g fill="none" stroke="#D4A93B" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M2 2h60v60H2z"></path><path d="M12 6h40M12 18h40M12 30h40M12 42h40M12 54h40"></path></g></svg>`
    },
    {
        name: "Next (app and pages router)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#000000"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M4 32l6-6M4 32l6 6M20 16l6-6M20 16l6 6M36 4l6-6M36 4l6 6M52 16l6-6M52 16l6 6M60 32l-6 6M60 32l-6-6M44 48l-6 6M44 48l-6-6M28 60l-6 6M28 60l-6-6M12 48l-6 6M12 48l-6-6"></path></g></svg>`
    },
    {
        name: "Qt",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#41CD52"><g fill="none" stroke="#41CD52" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M22 12L4 4l8 18M42 12L60 4l-8 18M32 22L32 2M10 52h44M16 26l12-12M48 26L36 14M22 48l12-12M52 48L40 36"></path></g></svg>`
    },
    {
        name: "Tailwind",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#06B6D4"><g fill="none" stroke="#06B6D4" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M30 3h4M3 16h58M7 3h50M15 54h34M5 47h14M7 60h10M21 47h6M17 60h22M53 47h3M27 28l5-5-5-5M37 3v54M31 3v54"></path></g></svg>`
    },
    {
        name: "Golang (Gin/ Fiber)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#00ADD8"><path d="M0 0h64v64H0z" fill="none"></path><path d="M16 2v60l15-15V17L16 2zM32 2v26h15v15L32 2zM48 2v45l16-16V2z"></path></svg>`
    },
    {
        name: "Java (Spring)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#6DB33F"><g fill="none" stroke="#6DB33F" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M32 2l2.837 8.511h7.326L38.04 23.65l6.795 20.349H32l-6.795-20.348 3.413-13.139H6.963L2 32l7.326 22.26h10.53L18.96 40.35h3.556L27.762 62 32 64l4.238-1.65 2.206-6.65h3.556l5.174 16.31h10.53L62 32 56.037 2H32z"></path></g></svg>`
    },
    {
        name: "Python",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#306998"><path d="M4 4v56l48-28L4 4z" fill="#306998"></path><path fill="#fff" d="M52 32L12 60V4z"></path></svg>`
    },
    {
        name: "Assembly",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#6E4C13"><path d="M0 32l19.017-16.785L4.926 1.176h54.148L44.983 15.215 64 32 44.983 48.785 59.074 62.824H4.926L19.017 48.785 0 32z"></path></svg>`
    },
    {
        name: "VHDL",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#B76E79"><g fill="none" stroke="#B76E79" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M32 2v60"></path><path d="M54 14l-22 8 22 8M10 14l22 8-22 8"></path></g></svg>`
    },
    {
        name: "C",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#A8B9CC"><g fill="none" stroke="#A8B9CC" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M32 2v60"></path><path d="M54 14l-22 8 22 8M10 14l22 8-22 8"></path></g></svg>`
    },
    {
        name: "C++ (SDL)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#00599C"><path d="M32 2v60"></path><g fill="none" stroke="#00599C" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle cx="15" cy="16" r="7"></circle><circle cx="32" cy="8" r="7"></circle><circle cx="49" cy="16" r="7"></circle></g></svg>`
    }
]

const TechStack = () => {
    return (
        <div className="text-center p-4 overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
            <div className="flex  sm:overflow-x-auto no-scrollbar space-x-4">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex-shrink-0">
                        <div dangerouslySetInnerHTML={{ __html: tech.svg }} className="w-12 h-12 mb-2"></div>
                        <p className="text-sm">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default TechStack;
