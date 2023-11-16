import './globals.css'

import { EB_Garamond, Varela } from 'next/font/google'
import localFonts from 'next/font/local'

import styles from './styles.module.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: 'no',
}

export const metadata = {
  title: 'ᓚᘏᗢ',
  description: 'Transforming Ideas Into Reality',
  icons: {
    icon: '/favicon.ico',
  },
}

const varelaFont = Varela({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-varela',
})

const eBGaramondFont = EB_Garamond({
  weight: ['400', '500', '600'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-eb-garamond',
})

const garamondFont = localFonts({
  src: '../../public/font/ITC-Garamond-W01-Book-Narrow.woff2',
  variable: '--font-garamond',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${varelaFont.variable} ${garamondFont.variable} ${eBGaramondFont.variable}`}>
      <body className={`select-none ${styles.foxed}`}>{children}</body>
    </html>
  )
}
