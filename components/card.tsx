export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-text-900 border pt-3 w-full rounded-xl text-card-foreground shadow-xl grid dark:border-secondary-50">
            {children}
        </div>
    )
}