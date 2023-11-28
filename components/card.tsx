import { twMerge } from "tailwind-merge"
import ScrollMotionDiv from "./scroll-motion-div"

export default function Card({ className, children, motion = false }: { className?: string, children: React.ReactNode, motion?: boolean }) {
    if (motion) {
        return (
            <ScrollMotionDiv className={twMerge(className, 'pt-3 w-full text-card-foreground grid bg-primary-100 backdrop-blur-sm shadow-sm shadow-primary-400 rounded-lg ')}>
                {children}
            </ScrollMotionDiv>
        )
    }
    return (
        <div className={twMerge(className, 'pt-3 w-full text-card-foreground grid bg-primary-100 backdrop-blur-sm shadow-sm shadow-primary-400 rounded-lg ')}>
            {children}
        </div>
    )
}