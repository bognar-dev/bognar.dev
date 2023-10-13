import Image from 'next/image'
import BGBalls from '@/components/bg-balls'
import Card from '@/components/card'
import Timeline from '@/components/timeline'
import { Accordion, AccordionItem, AccordionTitle, AccordionItemBody, AccordionDescription, AccordionItemTitle,AccordionItemButton} from '@/components/accordion'
import { siteConfig } from '@/config/site'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col  bg-background-50 p-10 w-full">
      <Accordion>
        <AccordionTitle>Contact</AccordionTitle>
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
        <AccordionItem
          itemTitle={<AccordionItemTitle>GitHub</AccordionItemTitle>}
          accordionItemContent={<AccordionItemBody>Link to my GitHub</AccordionItemBody>}
          accordionItemButton={<AccordionItemButton href={siteConfig.links.github}>GitHub</AccordionItemButton>}
        />
        
      </Accordion>
      
    </main>
  )
}
