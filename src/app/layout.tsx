import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K-Beauty Medical Tour',
  description: "The World's Choice, K-Beauty",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
