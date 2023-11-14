import { Libre_Baskerville as FontHead, IBM_Plex_Mono as FontBody } from "next/font/google"

export const fontBody = FontBody({
  weight:["100","200","300","400"],
  subsets: ["latin"],
  variable: "--font-body",
})

export const fontHead = FontHead({
  subsets: ["latin"],
  variable: "--font-head",
  weight: "400"
})