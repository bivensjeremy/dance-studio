import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../../public/facebook.svg'
import Twitter from '../../public/twitter.svg'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkedin.svg'
import Github from '../../public/github.svg'
import Mail from '../../public/mail.svg'

const footerData = [
    {
        id: 1,
        link: 'https://www.facebook.com/bivens.jeremy',
        image: Facebook,
        alt: 'Facebook Icon',
    },
    {
        id: 2,
        link: 'https://www.twitter.com/_Bivens',
        image: Twitter,
        alt: 'Twitter Icon',
    },
    {
        id: 3,
        link: 'https://wwww.instagram.com/bivensjeremy',
        image: Instagram,
        alt: 'Instagram Icon',
    },
    {
        id: 4,
        link: 'https://www.linkedin.com/in/bivensjeremy',
        image: Linkedin,
        alt: 'LinkedIn Icon',
    },
    {
        id: 5,
        link: 'https://www.github.comm/bivensjeremy',
        image: Github,
        alt: 'GitHub Icon',
    },
    {
        id: 6,
        link: 'mailto:admin@bivensblueprint.com?subject=Email From Website',
        image: Mail,
        alt: 'Mail Icon',
    },
]

const LinkIcon = ({ id, link, image, alt }) => {
    return (
        <div key={id} className='inline-flex mx-2 rounded-full hover:bg-[#F73D93] focus:bg-[#F73D93] transition duration-150 ease-in-out p-1'>
            <Link href={link} target="_blank" rel='noopener'>
                <Image 
                    src={image}
                    height={20}
                    width={20}
                    alt={alt}
                    className=""
                />
            </Link>
        </div>
    );
}

const Footer = () => {
    return (
        <footer>
            <div className='text-center pt-3'>
                <div>
                    {footerData.map(
                        LinkIcon
                    )}
                </div>

                <div>
                    <p className='uppercase text-xs'>
                        &copy; {new Date().getFullYear()} Bivens Blueprint, LLC
                    </p>
                </div>
                    
            </div>
        </footer>
    );
}

export default Footer;