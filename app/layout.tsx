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
      'https://mail.google.com/mail/u/0?ui=2&ik=3dcf481910&attid=0.1&permmsgid=msg-f:1772762710385379611&th=189a1e4ae794491b&view=fimg&realattid=f_lko2d27j6&disp=thd&attbid=ANGjdJ9finesMqrTenPGLe66uSFgbYNnyhmndgJvKcw7zekde8ET_It1uXAjJsbjdY2HbeXBUyT7K5GL1tLl7xh7fEfLJXyb4sBhdcQtpNY_uDEUAC7fIfCpvr5nvhI&ats=2524608000000&sz=w1920-h938'
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
