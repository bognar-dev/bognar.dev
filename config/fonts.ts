import { Pixelify_Sans as FontHead, Orbitron as FontBody } from "next/font/google"

export const fontBody = FontBody({
  subsets: ["latin"],
  variable: "--font-body",
})

export const fontHead= FontHead({
  subsets: ["latin"],
  variable: "--font-head",
})