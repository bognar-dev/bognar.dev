export default function Button({ children }: { children: React.ReactNode }) {
return(
    <div className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
    {children}
    </div>
)
}