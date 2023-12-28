import { Inter, Arbutus } from 'next/font/google'
import localFont from 'next/font/local'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Arbutus({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const beanCo = localFont({
  src: './Beanco-Font.otf',
  variable: '--font-bean-co',
  display: 'swap',
})

export const brightMelody = localFont({
  src: './Bright_Melody.otf',
  variable: '--font-bright-melody',
 display: 'swap',
})


export const think = localFont({
  src: './Think.ttf',
  variable: '--font-think',
  display: 'swap',
  weight: '800',
})
