import { NavItem } from "@/types/nav"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import { Icons } from "./icons"
import { cn } from "@udecode/cn"
import fonts from "@/config/fonts"


interface MainNavProps {
  items?: NavItem[]
}


export default function MainNav({ items }: MainNavProps) {

  return (
    <div className=" sticky top-0 z-40 w-full bg-white/10 backdrop-blur-sm rounded-b-sm">
      <div className="sticky top-0 z-50 flex flex-col gap-2 min-w-screen items-center justify-between divide-y-2 hover:divide-primary-300 divide-primary-100 pb-3 rounded-xl">

        <Link href="/" className={cn("font-head text-4xl flex items-center justify-items-center justify-center font-medium bg-opacity-10 hover:translate-x-1 hover:bg-secondary-200  ease-out duration-100 rounded-md px-4 mt-2",fonts.madeGentle.className)}>Bognar.dev</Link>
        {items?.length ? (
          <nav className="gap-2 flex md:gap-24 min-w-screen ">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className=
                    "text-md lg:text-xl group flex items-center font-medium hover:translate-x-1 hover:bg-secondary-200 ease-out duration-100 rounded-md md:px-4 mt-1 py-1"
                  >
                    {item.title}
                    <Icons.arrowUpRight  className="group-hover:-translate-y-0.5  ease-out duration-100 w-2 h-2 md:w-4 md:h-4 ml-2"/>
                  </Link>
                )
            )}
          </nav>
        ) : null}

      </div>
      <ThemeToggle />
    </div>
  )
}