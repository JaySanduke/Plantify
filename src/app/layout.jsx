import './globals.css';

//components
import Header from './components/headers/Header';

export const metadata = {
  title: 'Plantify',
  description: 'A simple app to help you keep track of your plants',
}

export default function RootLayout({ children }) {
  return (
    <html id='root' lang="en">
      <body>
        <Header />
        <h1>This root layout</h1>
        {children}
      </body>
    </html>
  )
}
