import './globals.css'
import { inter } from './fonts'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
            {children}
          <Footer />
      </body>
    </html>
  )
}
