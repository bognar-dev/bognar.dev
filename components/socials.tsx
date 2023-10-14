import { siteConfig } from "@/config/site";
import { Accordion, AccordionTitle, AccordionItem, AccordionItemTitle, AccordionItemBody, AccordionItemButton } from "./accordion";
import { Icons } from "./icons";

export default function Socials({ className }: {className?: string}) {
  return(
    <Accordion className=''>
    <AccordionTitle>Contact</AccordionTitle>
    <AccordionItem
      itemTitle={<AccordionItemTitle><Icons.gitHub className="w-5 h-5"/></AccordionItemTitle>}
      accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
      accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
    />
    <AccordionItem
      itemTitle={<AccordionItemTitle><Icons.mail/></AccordionItemTitle>}
      accordionItemContent={<AccordionItemBody>niklas@bognar.dev</AccordionItemBody>}
      accordionItemButton={<AccordionItemButton href={siteConfig.links.email}>Email Me!</AccordionItemButton>}
    />
  </Accordion>
  )
  }