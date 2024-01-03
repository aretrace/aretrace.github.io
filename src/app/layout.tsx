import './globals.css'

import { EB_Garamond, Varela } from 'next/font/google'
import localFonts from 'next/font/local'

import ReactDOM from 'react-dom'
import styles from './styles.module.css'

ReactDOM.preload('/static/imgs/Cueiz.jpeg', { as: 'image' })
ReactDOM.preload('/static/imgs/Inventory.jpeg', { as: 'image' })
ReactDOM.preload('/static/imgs/AppointEase.jpeg', { as: 'image' })
ReactDOM.preload('/static/imgs/hncr-cli.jpeg', { as: 'image' })
ReactDOM.preload('/static/imgs/tv.gif', { as: 'image' })

ReactDOM.prefetchDNS('https://cueiz.vercel.app/quiz')
ReactDOM.preconnect('https://inventory-wq4jlkdw5a-uw.a.run.app/', { crossOrigin: 'anonymous' })

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
