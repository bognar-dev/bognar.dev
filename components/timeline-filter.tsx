

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import TimeLineFilterMap from './timeline-tag-map';

type FilterProps = {
    tags: string[],
    className?: string,
    selectedTag: string,
    setSelectedTag: Dispatch<SetStateAction<string>>;
};

const TimeLineFilter = ({ tags, className, selectedTag,setSelectedTag }: FilterProps) => {

    

    return (
        <TimeLineFilterMap tags={tags} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
    );
};

export default TimeLineFilter;