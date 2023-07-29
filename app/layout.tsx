import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gender Reveal',
  description: 'Gender Reveal Party Invitation',
  openGraph: {
    type: 'website',
    url: 'https://gender-reveal-invitation.vercel.app',
    description: 'Gender Reveal Party Invitation',
    title: 'Gender Reveal',
    images: [
      'https://instagram.fmnl18-1.fna.fbcdn.net/v/t51.2885-15/363835210_2856735644456780_7084995320807450544_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fmnl18-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=W89PMPYog8UAX_ds7Mk&edm=ACWDqb8BAAAA&ccb=7-5&_nc_e2o=f&oh=00_AfDWXX3dJCSTJeRqObXRfFi0IRe4RpBH_bWY8z8G2T_dLg&oe=64C95278&_nc_sid=ee9879'
      ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
