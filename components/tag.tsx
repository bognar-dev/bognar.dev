import { twMerge } from "tailwind-merge";
import { Icons } from "./icons";

const Tag = ({ tag, colour,className }:{tag:string,colour:string, className?:string}) => (
    <div className={twMerge(`flex items-center flex-auto flex-grow-0 justify-start mb-3 text-sm bg-${colour}-200 rounded-full px-2 gap-1 `,className)}>
        <Icons.tag />
        {tag}
    </div>
);

export default Tag;