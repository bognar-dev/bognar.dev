import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AnimationControls, AnimationProps, Transition, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

type TimeLineFilterMapProps = {
    tags: string[],
    className?: string,
    selectedTag: string,
    setSelectedTag: Dispatch<SetStateAction<string>>;
};


const TimeLineFilterMap = ({ tags, selectedTag,setSelectedTag}: TimeLineFilterMapProps) => {

    let [activeTag, setActiveTag] = useState(tags[0]);

    return (
        <div className="flex space-x-1 justify-items-center justify-center">
            {tags.map((tag) => (
                <button
                    key={tag}
                    onClick={() =>{setActiveTag(tag);
                        setSelectedTag(tag)}}
                    className={`${activeTag === tag ? "" : "hover:text-primary-600"
                        } relative rounded-full px-3 py-1.5 text-sm font-medium text-black dark:text-white outline-sky-400 transition focus-visible:outline-2`}
                    style={{
                        WebkitTapHighlightColor: "transparent",
                    }}
                >
                    {activeTag=== tag && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-10 bg-primary-300 dark:bg-primary-500 mix-blend-multiply dark:mix-blend-screen"
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    {tag}
                </button>
            ))}
        </div>
    );
}


export default TimeLineFilterMap;