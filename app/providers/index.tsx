"use client"

import React, { createContext } from "react";
import { GeneralProvider } from "../context/generalcontext";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const ThemeContext = createContext({})

export default function ThemeProvider({ children }: { children: any }) {
    return (
        <ThemeContext.Provider value="dark">
            <GeneralProvider>
                <html lang="en" data-theme="light">
                    <body className={inter.className}>
                        {children}
                    </body>
                </html>
            </GeneralProvider>
        </ThemeContext.Provider>
    )
}
