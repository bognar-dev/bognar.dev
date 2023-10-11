export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-sm bg-primary-300 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}