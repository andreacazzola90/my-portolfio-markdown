import './globals.css'
import { GeneralProvider } from './context/generalcontext';
import type { Metadata } from 'next'
import Navbar from './components/navbar'
import Footer from './components/footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
//config.autoAddCss = false

import ThemeProvider from './providers';

export const metadata: Metadata = {
  title: 'Plp test',
  description: 'creation of a product listing for displaying products and adding them to the cart',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </ThemeProvider >
  )
}
