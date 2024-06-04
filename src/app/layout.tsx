import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Theme } from '@radix-ui/themes'

export const metadata: Metadata = {
  title: 'CookUnity Challenge',
  description: 'CookUnity challenge by: Esteban Arce',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="h-full">
        <Theme className="bg-gradient-to-br from-gray-800 to-black">
          {children}
        </Theme>
      </body>
    </html>
  )
}
