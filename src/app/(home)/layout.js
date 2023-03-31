import '../globals.css'

export const metadata = {
  title: 'Plantify',
  description: 'A simple app to help you keep track of your plants',
}

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <section id='home'>
        <h1>
          This Is The Home Layout
        </h1>
      </section>
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
