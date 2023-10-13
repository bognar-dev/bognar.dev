export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="border pt-3 w-full rounded-xl text-card-foreground shadow-xl grid dark:border-transparent bg-background-200">
            {children}
        </div>
    )
}