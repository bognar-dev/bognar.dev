import { Dispatch, SetStateAction } from 'react';
import TagMap from './project-tag-map';

type FilterProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
};




const ProjectFilter = ({ tags, className, selectedTags, setSelectedTags }: FilterProps) => {

    const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));

        } else {
            setSelectedTags([...selectedTags, tag]);
            tags.sort((a, b) => {
                const aSelected = selectedTags.includes(a);
                const bSelected = selectedTags.includes(b);

                if (aSelected && !bSelected) {
                    return -1;
                } else if (!aSelected && bSelected) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
    };

    return (
        <div className=''>
           
        </div>
    );
};

export default ProjectFilter;