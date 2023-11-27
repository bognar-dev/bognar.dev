

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Tag from './tag';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type FilterProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
};
type TimeLineFilterMapProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    handleTagClick: (tag: string) => void;
};


const TimeLineFilterMap = ({ tags, selectedTags, handleTagClick }:TimeLineFilterMapProps) => {
    const [parent] = useAutoAnimate();
    const sortedTags = [...selectedTags, ...tags.filter(tag => !selectedTags.includes(tag))];
    return (
        <div ref={parent} className='flex flex-wrap justify-center gap-2 text-lg p-5'>
            {tags.map((tag: string, index: number) => (

                <span key={index} onClick={() => handleTagClick(tag)}
                    className={` ${selectedTags.includes(tag) && 'bg-primary-400 hover:bg-primary-500'} bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 select-none`}>
                    {tag}
                </span>
            ))}
        </div>
    )
}
const TimeLineFilter = ({ tags, className, selectedTags, setSelectedTags }: FilterProps) => {

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));

        } else {
            setSelectedTags([...selectedTags, tag]);

        }
    };

    return (
        <TimeLineFilterMap tags={tags} handleTagClick={handleTagClick} selectedTags={selectedTags} />
    );
};

export default TimeLineFilter;