

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Tag from './tag';

type FilterProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
};

const TimeLineFilter = ({ tags, className, selectedTags, setSelectedTags }: FilterProps) => {

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));

        } else {
            setSelectedTags([...selectedTags, tag]);

        }
    };

    return (
        <div className='flex flex-wrap justify-center gap-2 text-lg p-5'>
            {tags.map((tag, index) => (

                <span key={index} onClick={() => handleTagClick(tag)} 
                className={` ${selectedTags.includes(tag) &&'bg-primary-400 hover:bg-primary-500'} bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 select-none`}>
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default TimeLineFilter;