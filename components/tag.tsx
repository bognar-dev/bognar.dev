import { Icons } from "./icons";

const Tag = ({ tag, colour }:{tag:string,colour:string}) => (
    <div className={`flex items-center flex-auto flex-grow-0 justify-start mb-3 text-sm bg-${colour}-200 rounded-full px-2 gap-1 `}>
        <Icons.tag />
        {tag}
    </div>
);

export default Tag;