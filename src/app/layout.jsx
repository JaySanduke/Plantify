import './globals.css'

export const metadata = {
  title: 'Plantify',
  description: 'A simple app to help you keep track of your plants',
}

export default function RootLayout({ children }) {
  return (
    <html id='root' lang="en">
      <body>
        <section id='root'>
          <h1>
            This Is The Root Layout
          </h1>
        </section>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
