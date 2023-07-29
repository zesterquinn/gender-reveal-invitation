import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gender Reveal',
  description: 'Gender Reveal Party Invitation',
  openGraph: {
    type: 'website',
    description: 'Gender Reveal Party Invitation',
    title: 'Gender Reveal',
    images: [
      'https://scontent.fmnl18-1.fna.fbcdn.net/v/t39.30808-6/345889645_3337036846607512_4355252294182763110_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH3C5gymzKult2RkKN4AGeEwfIVACahg3bB8hUAJqGDdg70UgqLYcdkllztIvs_SSXtiV2SyDvp5mor1wDeVIkc&_nc_ohc=aQ4VxL6g7oMAX9K_fsM&_nc_ht=scontent.fmnl18-1.fna&oh=00_AfCWpW-EgY_M9T_n1HpsIDqoIKaIZOD3I3UJFNBMqBRsow&oe=64CA5558'
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
