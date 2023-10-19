import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Tab from '@/components/Tab/Tab';
import Aside from "@/components/Aside/Aside";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>

      <body className={inter.className}>
        <Header />
        <div className='container mx-auto px-5'>
          <Tab />
          <div className='flex justify-between gap-x-[26px]'>
            <Aside />
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}