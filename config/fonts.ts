import { Plaster , Roboto_Slab as FontBody } from "next/font/google"

export const fontBody = FontBody({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
})

export const fontPlaster = Plaster({
  subsets: ["latin-ext"],
  weight: "400",
  variable: "--font-plaster",
})