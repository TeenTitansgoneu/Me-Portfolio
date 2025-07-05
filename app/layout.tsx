import './globals.css'

export const metadata = {
  title: 'Teen-Portfolio',
  description: 'Check out my work',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
