



export default function BGBalls({ children }: { children: React.ReactNode }) {
    const circles = Array.from({ length: 40 }, (_, index) => (
        <div key={index} className="w-24 h-24 bg-slate-500 rounded-full"></div>
    ));

    return (
        <div className="overscroll-contain">
            <div className="grid gap-10 md:grid-rows-4 grid-flow-col relative z-0 overscroll-contain">
                {circles}
                <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                   {children}
                </div>
            </div>
        </div>
    )
}