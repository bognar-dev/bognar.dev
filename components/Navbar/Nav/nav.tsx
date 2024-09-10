import { motion } from 'framer-motion';
import { perspective, slideIn } from "./anim";
import { footerLinks, NavItem } from '@/types/nav';

interface MainNavProps {
    items: NavItem[]
    footerLinks: footerLinks[]
}

export default function Navbar({ items, footerLinks }: MainNavProps) {
  return (
    <div className="flex flex-col justify-between p-[100px_40px_50px_40px] h-full box-border">
       <div className="flex flex-col gap-2.5">
        {
            items.map((link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className="perspective-[120px] perspective-origin-bottom">
                        <motion.div
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <a href={href} className="no-underline text-black text-[46px]">
                                {title}
                            </a>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
       <motion.div className="flex flex-wrap">
            {
                footerLinks.map((link, i) => {
                    const { title, url} = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                            href={url}
                            className="w-1/2 mt-1.25"
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}
