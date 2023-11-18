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
    adminNav: [
        {
            title: "Dashboard",
            href: "/admin/dashboard",
        },
        {
            title: "Edit Projects",
            href: "/admin/projects",
        },
        {
            title: "Edit Biography",
            href: "/admin/biography",
        },
        {
            title: "Back to Website",
            href: "/",
        },
    ],
    links: {
        github: "https://github.com/bognar-dev",
        email: "mailto:niklas@bognar.dev",
        discord: "https://discordapp.com/users/691677819947843644",
    },


  
  
}
