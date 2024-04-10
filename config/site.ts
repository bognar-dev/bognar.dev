import { Icons } from "@/app/(components)/icons"

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
        github: {
            url: "https://github.com/bognar-dev",
            icon: Icons.gitHub, // Replace with your actual Github icon component
        },
        email: {
            url: "mailto:niklas@bognar.dev",
            icon: Icons.mail, // Replace with your actual Email icon component
        },
        discord: {
            url: "https://discordapp.com/users/691677819947843644",
            icon: Icons.discord, // Replace with your actual Discord icon component
        },
        linkedin: {
            url: "https://www.linkedin.com/in/niklas-bogn%C3%A1r-503987243/",
            icon: Icons.linkedIn, // Replace with your actual Linkedin icon component
        },
        instagram: {
            url: "https://www.instagram.com/nikibgnr/?hl=en",
            icon: Icons.instagram, // Replace with your actual Instagram icon component
        },
    },




}
