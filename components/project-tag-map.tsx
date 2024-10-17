import Tag from "./tag"
type TagProps = {
    tags: string[],
    className?: string,
    selectedTags: string[],
    handleTagClick: (tag: string) => void;
};



const TagMap = ({ tags, handleTagClick, selectedTags }: TagProps) => {
    const sortedTags = [...selectedTags, ...tags.filter(tag => !selectedTags.includes(tag))];

    return (
     
        <ul className=' grid grid-cols-2 md:flex md:flex-row md:flex-wrap md:justify-center md:items-center gap-2 text-lg'>
            {sortedTags.map((tag: string, index: number) => (
                <Tag index={index}animate={true} key={index} tag={tag} onClick={() => handleTagClick(tag)}
                    className={`h-10 px-2 py-1 shadow-primary-50 shadow-sm select-none ${selectedTags.includes(tag) ? 'bg-primary-300 hover:bg-primary-400' : 'bg-primary-50 hover:bg-primary-100'
                        }`} />
            ))}
        </ul>
    )
}

export default TagMap;
