import { Icons } from "./icons";


const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;
const technologies: { name: string, svg: JSX.Element }[] = [

  {
    name: "React",
    svg: <Icons.React width={20} height={20} />
  },
  {
    name: "Tailwind",
    svg: <Icons.Tailwind width={20} height={20} />
  },
  {
    name: "Framer",
    svg: <Icons.framerMotion width={20} height={20} />
  },
  {
    name: "SolidJs",
    svg: <Icons.SolidJS width={20} height={20} />
  },
  {
    name: "Next",
    svg: <Icons.Next width={20} height={20} />
  },

  {
    name: "Golang",
    svg: <Icons.Go width={20} height={20} />
  },
  {
    name: "Gin",
    svg: <Icons.Gin width={20} height={20} />
  },
  {
    name: "Java ",
    svg: <Icons.Java width={20} height={20} />
  },
  {
    name: "Python",
    svg: <Icons.Python width={20} height={20} />
  },
  {
    name: "Assembly",
    svg: <Icons.Assembly width={20} height={20} />
  },
  {
    name: "VHDL",
    svg: <Icons.VHDL width={20} height={20} />
  },
  {
    name: "",
    svg: <Icons.C width={20} height={20} />
  },
  {
    name: "C++",
    svg: <Icons.CPP width={20} height={20} />
  },
  {
    name: "Qt",
    svg: <Icons.Qt width={20} height={20} />
  },
  {
    name: "SDL",
    svg: <Icons.SDL width={20} height={20} />
  }
]


const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: any[]) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }: { children: React.ReactNode, duration: number, reverse?: boolean }) => {
  return (
    <div className='overflow-hidden relative'>
      <div
        className={` selection:motion-reduce:transition-none flex flex-grow justify-between space-x-4 ${reverse ? 'md:animate-loop' : 'md:animate-loop-reverse'} md:repeat-infinite fill-mode-both`}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ tag ,reverse}: { tag: { name: string, svg: JSX.Element }, reverse:boolean }) => (
  <div className={`tag flex items-center space-x-1 text-text-100 text-sm bg-primary-600 rounded-md mr-1 px-4 py-2 shadow-md`}>
    <span className='text-text-200 text-lg mr-2'>{tag.svg}</span>
    {tag.name}
  </div>
);

const InfiniteScroll = () => (
  <>
<h2 className="text-3xl mb-4 text-center">What I like to use:</h2>
  <div className='w-full flex flex-col justify-between gap-4 py-2 overflow-hidden'>
    
    {[...new Array(ROWS)].map((_, i) => (
      <InfiniteLoopSlider
        key={i}
        duration={random(DURATION - 5000, DURATION + 5000)}
        reverse={i % 2 === 0}
      >
        {shuffle(technologies).slice(0, TAGS_PER_ROW * 2).map((tag, index) => (
          <Tag key={index} tag={tag} reverse={i % 2 === 0} />
        ))}
      </InfiniteLoopSlider>
    ))}
    <div className='fade pointer-events-none absolute inset-0 bg-gradient-to-r
       dark:from-background-50 dark:via-transparent dark:to-background-50
       from-white/30 via-transparent to-white/30 '></div>
  </div>
  </>
);

export default InfiniteScroll