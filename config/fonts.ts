import { Inter, Arbutus, Anonymous_Pro } from 'next/font/google'
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

const beanCo = localFont({
  src: './Beanco-Font.otf',
  variable: '--font-bean-co',
  display: 'swap',
})

 const brightMelody = localFont({
  src: './Bright_Melody.otf',
  variable: '--font-bright-melody',
 display: 'swap',
})


const think = localFont({
  src: './Think.ttf',
  variable: '--font-think',
  display: 'swap',
  weight: '800',
})


const madeTommyBlackOutline = localFont({
  src: './MadeTommy-BlackOutline.otf',
  variable: '--font-made-tommy-black-outline',
  display: 'swap',
  weight: '800',
})

const madeTommyBlack = localFont({
  src: './MadeTommy-Black.otf',
  variable: '--font-made-tommy-black',
  display: 'swap',
  weight: '800',
})


const madeTommyLight = localFont({
  src: './MadeTommy-Light.otf',
  variable: '--font-made-tommy-light',
  display: 'swap',
  weight: '800',
})
const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anonymous-pro',
  weight: ['400','700']
})

const madeGentle = localFont({
  src: './MadeGentle.otf',
  variable: '--font-made-gentle',
  display: 'swap',
  weight: '900',
})


const neueMachina = localFont({
  src: './NeueMachina-Regular.otf',
  variable: '--font-neue-machina',
  display: 'swap',
  weight: '600',
})

const neueMachinaBold = localFont({
  src: './NeueMachina-Ultrabold.otf',
  variable: '--font-neue-machina-bold',
  display: 'swap',
  weight: '900',
})

const neueMachinaLight = localFont({
  src: './NeueMachina-Light.otf',
  variable: '--font-neue-machina-light',
  display: 'swap',
  weight: '400',
})

export default {inter, roboto_mono, beanCo, brightMelody, think, anonymousPro,madeTommyBlackOutline,madeGentle,madeTommyLight,madeTommyBlack,neueMachina,neueMachinaBold,neueMachinaLight}
