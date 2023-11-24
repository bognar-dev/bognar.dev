import { twMerge } from "tailwind-merge";
import { Icons } from "./icons";

const Tag = ({ tag, colour,className,onClick }:{tag:string,colour:string, className?:string, onClick?: () => void}) => (
    <div onClick={onClick} className={twMerge(`flex items-center flex-auto flex-grow-0 justify-start mb-3 text-sm bg-${colour}-300 rounded-full px-2 gap-1 `,className)}>
        <Icons.tag />
        {tag}
    </div>
);

export default Tag;