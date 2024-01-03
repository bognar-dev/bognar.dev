import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function Button({ className, children, href }: { className?: string, children: React.ReactNode, href?: string }) {
    if (href === undefined) {
        return (
            <button className={twMerge( className,'flex flex-row text-sm font-medium text-text-900 py-2 px-4 rounded-md bg-primary-500 m-2 shadow-sm shadow-primary-200 hover:shadow-primary-500 hover:translate-x-1 transition-all justify-self-center')}>
                {children}
            </button>
        )
    }

    return (
        <Link href={href} className={twMerge( className,' flex flex-row text-text-50 text-sm font-medium  py-2 px-4 rounded-md bg-primary-500 m-2 shadow-sm shadow-primary-200 hover:shadow-primary-500 hover:translate-x-1 transition-all justify-self-center')}>

            {children}

        </Link>
    )
}

