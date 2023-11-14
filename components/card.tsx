import { twMerge } from "tailwind-merge"

export default function Card({ className,children }: {className?: string, children: React.ReactNode }) {
    return (
        <div className={twMerge(className,'pt-3 w-full text-card-foreground grid bg-white/10 backdrop-blur-sm shadow-sm shadow-background-400 rounded-lg ')}>
            {children}
        </div>
    )
}