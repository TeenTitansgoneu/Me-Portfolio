import './globals.css'

export const metadata = {
  title: 'Cooles Portfolio',
  description: 'Modernes Portfolio mit coolen Scroll-Animationen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
