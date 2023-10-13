export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Bognar.dev",
    description:
        "Where Algorithms Meet Aesthetics",
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "Biography",
            href: "/biography",
        },
        {
            title: "Contact",
            href: "/contact",
        },
    ],
    links: {
        github: "https://github.com/crueltyfreedev",
        email: "mailto:niklas@bognar.dev"
    },
}
