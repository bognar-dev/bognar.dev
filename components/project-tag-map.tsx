import { useAutoAnimate } from '@formkit/auto-animate/react';
import Tag from "./tag"
type TagProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    handleTagClick: (tag: string) => void;
};

const TagMap = ({ tags, handleTagClick, selectedTags }: TagProps) => {
    const [parent] = useAutoAnimate();
    const sortedTags = [...selectedTags, ...tags.filter(tag => !selectedTags.includes(tag))];

    return (
        <div ref={parent}  className='flex flex-wrap justify-center gap-2 text-lg p-5'>
            {sortedTags.map((tag:string, index:number) => (
                <Tag key={index} tag={tag} onClick={() => handleTagClick(tag)}
                    className={`select-none ${selectedTags.includes(tag) ? 'bg-primary-300 hover:bg-primary-400' : 'bg-accent-200 hover:bg-accent-300'
                        }`} colour='' />
            ))}
        </div>
    )
}

export default TagMap;
