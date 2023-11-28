import { siteConfig } from "@/config/site";
import { Accordion, AccordionTitle, AccordionItem, AccordionItemTitle, AccordionItemBody, AccordionItemButton } from "./accordion";
import { Icons } from "./icons";
import { twMerge } from "tailwind-merge";
import ScrollMotionDiv from "./scroll-motion-div";
import SectionHeading from "./section-header";

export default function Socials({ className,motion=false }: {className?: string,motion?:boolean}) {
  if(motion){
    return(
      <ScrollMotionDiv>
      <Accordion className={twMerge('w-full bg-primary-100 backdrop-blur-sm',className)}>
      <SectionHeading>My biography</SectionHeading>
      <AccordionItem
        itemTitle={<AccordionItemTitle><Icons.gitHub className="w-5 h-5"/></AccordionItemTitle>}
        accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
        accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
      />
      <AccordionItem
        itemTitle={<AccordionItemTitle><Icons.mail className="w-5 h-5"/></AccordionItemTitle>}
        accordionItemContent={<AccordionItemBody>niklas@bognar.dev</AccordionItemBody>}
        accordionItemButton={<AccordionItemButton href={siteConfig.links.email}>Email Me!</AccordionItemButton>}
      />
      <AccordionItem
        itemTitle={<AccordionItemTitle><Icons.discord className="w-5 h-5"/></AccordionItemTitle>}
        accordionItemContent={<AccordionItemBody>Ask me anything on Discord</AccordionItemBody>}
        accordionItemButton={<AccordionItemButton href={siteConfig.links.discord}>Follow me</AccordionItemButton>}
      />
      <AccordionItem
        itemTitle={<AccordionItemTitle><Icons.linkedIn className="w-5 h-5"/></AccordionItemTitle>}
        accordionItemContent={<AccordionItemBody>See my linkedIn profile</AccordionItemBody>}
        accordionItemButton={<AccordionItemButton href={siteConfig.links.linkedin}>Follow me</AccordionItemButton>}
      />
    </Accordion>
    </ScrollMotionDiv>
    )
  }
  return(
    <Accordion className={twMerge('w-full bg-white/10 backdrop-blur-sm',className)}>
    <AccordionTitle className="text-3xl first-letter:text-4xl">Contact</AccordionTitle>
    <AccordionItem
      itemTitle={<AccordionItemTitle><Icons.gitHub className="w-5 h-5"/></AccordionItemTitle>}
      accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
      accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
    />
    <AccordionItem
      itemTitle={<AccordionItemTitle><Icons.mail className="w-5 h-5"/></AccordionItemTitle>}
      accordionItemContent={<AccordionItemBody>niklas@bognar.dev</AccordionItemBody>}
      accordionItemButton={<AccordionItemButton href={siteConfig.links.email}>Email Me!</AccordionItemButton>}
    />
    <AccordionItem
      itemTitle={<AccordionItemTitle><Icons.discord className="w-5 h-5"/></AccordionItemTitle>}
      accordionItemContent={<AccordionItemBody>Ask me anything on Discord</AccordionItemBody>}
      accordionItemButton={<AccordionItemButton href={siteConfig.links.discord}>Follow me</AccordionItemButton>}
    />
    <AccordionItem
        itemTitle={<AccordionItemTitle><Icons.linkedIn className="w-5 h-5"/></AccordionItemTitle>}
        accordionItemContent={<AccordionItemBody>See my linkedIn profile</AccordionItemBody>}
        accordionItemButton={<AccordionItemButton href={siteConfig.links.linkedin}>Follow me</AccordionItemButton>}
      />
      <AccordionItem
        itemTitle={<AccordionItemTitle><Icons.instagram className="w-5 h-5"/></AccordionItemTitle>}
        accordionItemContent={<AccordionItemBody>Visit me!</AccordionItemBody>}
        accordionItemButton={<AccordionItemButton href={siteConfig.links.instagram}>Follow me</AccordionItemButton>}
      />
  </Accordion>
  )
  }