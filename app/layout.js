import './globals.css'
import Footer from './components/Footer'
import { inter, fredoka, rockSalt } from './fonts';

export const metadata = {
  title: {
    default: 'Dreamers Dance Studio',
    template: `%s - Blueprint Web Dev`,
  },
  description: 'Blueprint Web Dev builds custom websites and mobile apps using modern tech. Based in Georgia, we serve growing businesses nationwide with scalable systems and branded design.',
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://blueprintwebdev.com'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blueprint web Dev',
    description: 'Blueprint Web Dev builds custom websites and mobile apps using modern tech. Based in Georgia, we serve growing businesses nationwide with scalable systems and branded design.',
    url: 'https://blueprintwebdev.com',
    siteName: 'Blueprint Web Dev',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.blueprintwebdev.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Bivens Blueprint OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blueprint Web Dev',
    description: 'Blueprint Web Dev builds custom websites and mobile apps using modern tech. Based in Georgia, we serve growing businesses nationwide with scalable systems and branded design.',
  },
  keywords: [
    'web design Albany GA',
    'custom websites Albany Georgia',
    'Georgia web designers',
    'affordable web design Georgia',
    'small business websites',
    'responsive web design',
    'professional web design',
    'web development services',
    'web agency',
    'Blueprint Web Dev',
    'Bivens Blueprint',
    'Next.js developer',
    'remote web developer USA',
    'scalable web solutions',
    'consultative onboarding',
    'custom website packages',
    'website design for businesses',
    'best website design',
    'web design for startups',
  ],
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={`
      ${fredoka.variable}
      ${rockSalt.variable}
      ${inter.variable} 
      scroll-smooth 
      data-scroll-behavior="smooth"
    `}>
      <head />

      <body className='bg-background text-foreground'>
        <main className='max-w-8xl mx-auto grow'>
          {children}
        </main>
            
          <Footer />
      </body>
    </html>
  )
}
