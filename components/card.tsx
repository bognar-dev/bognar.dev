export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-text-900 bg-background-50 border pt-3 w-full rounded-xl text-card-foreground shadow-xl grid justify-items-center">
            {children}
        </div>
    )
}