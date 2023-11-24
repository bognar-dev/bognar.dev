import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Tag from './tag';

type FilterProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
};

const ProjectFilter = ({ tags, className, selectedTags, setSelectedTags }: FilterProps) => {
    
    const handleTagClick = (tag: string) => {
        console.log(selectedTags);
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
            
        } else {
            setSelectedTags([...selectedTags, tag]);
            
        }
    };

    return (
        <div className='grid grid-flow-col overflow-x-scroll no-scrollbar gap-2'>
            {tags.map((tag, index) => (

                <Tag key={index} tag={tag} onClick={() => handleTagClick(tag)}
                    className={`select-none ${selectedTags.includes(tag) ?'bg-primary-400 hover:bg-primary-500': 'bg-accent-300 hover:bg-accent-200'
                        }`} colour='' />

            ))}
        </div>
    );
};

export default ProjectFilter;