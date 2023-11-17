import { Libre_Baskerville as FontHead, Roboto_Slab as FontBody } from "next/font/google"

export const fontBody = FontBody({
  weight:"400",
  subsets: ["latin"],
  variable: "--font-body",
})

export const fontHead = FontHead({
  subsets: ["latin"],
  variable: "--font-head",
  weight: "400"
})