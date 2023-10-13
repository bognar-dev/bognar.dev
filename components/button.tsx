import { twMerge } from "tailwind-merge";

export default function Button({ className,children }: {className?: string, children: React.ReactNode }) {
return(
    <button className={twMerge('text-sm font-medium text-text-900 py-2 px-4 rounded-md bg-primary-500 mt-10 shadow-sm shadow-primary-200 hover:shadow-primary-500 hover:translate-x-1 transition-all justify-self-center',className)}>
    {children}
    </button>
)
}

