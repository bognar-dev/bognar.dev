import { NavItem } from "@/types/nav"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"


interface MainNavProps {
  items?: NavItem[]
}


export default function MainNav({ items }: MainNavProps) {

  return (
    <div className=" sticky top-0 z-40 w-full">
    <div className="sticky bg-transparent top-0 z-50 flex flex-col gap-2 min-w-screen items-center justify-between divide-y-2 hover:divide-accent-300 divide-accent-100 m-3">
     
      <Link href="/" className="font-head text-3xl flex items-center font-medium bg-opacity-10 hover:translate-x-1 hover: ease-out duration-100 rounded-md px-4 mt-1">Bognar.dev</Link>
      {items?.length ? (
        <nav className="gap-2 flex md:gap-24 min-w-screen">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className=
                  "flex items-center text-sm font-medium hover:bg-orange-200 ease-out duration-100 rounded-md px-4 mt-1"
                >
                  {item.title}
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