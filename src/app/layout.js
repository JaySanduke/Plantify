import './globals.css'

export const metadata = {
  title: 'Plantify',
  description: 'A simple app to help you keep track of your plants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
