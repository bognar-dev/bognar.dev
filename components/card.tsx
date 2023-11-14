import { twMerge } from "tailwind-merge"

export default function Card({ className,children }: {className?: string, children: React.ReactNode }) {
    return (
        <div className={twMerge('pt-3 w-full text-card-foreground grid  backdrop-blur-sm shadow-sm shadow-background-400 rounded-lg ',className)}>
            {children}
        </div>
    )
}