import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkedin.svg'
import Github from '../../public/github.svg'
import Mail from '../../public/mail.svg'

const footerData = [
    {
        link: 'https://www.facebook.com/bivensblueprint',
        image: Facebook,
        alt: 'Facebook link',
        color: '#0866FF'
    },
    {
        link: 'https://www.instagram.com/bivensjeremy',
        image: Instagram,
        alt: 'Instagram link',
        color: '#FF0069'
    },
    {
        link: 'https://www.linkedin.com/in/bivensjeremy',
        image: Linkedin,
        alt: 'LinkedIn Icon',
        color: '#01B0F0'
    },
    {
        link: 'https://www.github.comm/bivensjeremy',
        image: Github,
        alt: 'GitHub Icon',
        color: '#181717'
    },
    {
        link: 'mailto:admin@bivensblueprint.com?subject=Email From Dreamers Website',
        image: Mail,
        alt: 'Mail Icon',
    },
]

const Footer = () => {
    return (
        <footer>
            <div className='text-center pt-3'>
                {footerData.map(({ link, image, alt, color }, idx) => (
                    <div key={idx} className='inline-flex mx-2 rounded-lg p-1 hover:border-accent focus:border-accent hover:border focus:hover transition duration-150 ease-in-out '>
                        <Link href={link} target="_blank" rel='noopener'>
                            <Image 
                                src={image}
                                height={20}
                                width={20}
                                alt={alt}
                            />
                        </Link>
                    </div>
                ))}
                <div>
                    <p className='uppercase text-xs'>
                        &copy; {new Date().getFullYear()} Blueprint Web Dev | Bivens Media Group
                    </p>
                </div>
                    
            </div>
        </footer>
    );
}

export default Footer;