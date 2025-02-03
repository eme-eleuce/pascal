import Image from 'next/image'
import Link from 'next/link'
import { FaVimeo, FaLinkedin, FaInstagram } from 'react-icons/fa'
import logo from '@/app/photos/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#1B365D] text-white py-12">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start col-span-1 md:col-span-2">
            <Image
              src={logo}
              alt="Sub Sole Films"
              width={200}
              height={60}
              className="w-[400px] md:w-[400px] lg:w-[500px] h-auto"
              priority
            />
          </div>

          {/* Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-600 font-bold text-xl md:text-2xl mb-6">KONTAKT</h3>
            <div className="space-y-3 text-lg md:text-xl">
              <p className="font-medium">+41 79 731 06 34</p>
              <a 
                href="mailto:pascal@subsolefilms.com"
                className="hover:text-orange-600 transition-colors font-medium"
              >
                pascal@subsolefilms.com
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-600 font-bold text-xl md:text-2xl mb-6">ADRESSE</h3>
            <div className="space-y-3 text-lg md:text-xl">
              <p className="font-medium">Gerechtigkeitsgasse 81</p>
              <p className="font-medium">3011 Bern</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end items-start space-x-8">
            <Link 
              href="https://vimeo.com/user62601297" 
              target="_blank"
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaVimeo size={32} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/pascal-gysi-186938160" 
              target="_blank"
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link 
              href="https://www.instagram.com/pascal_subsole/" 
              target="_blank"
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaInstagram size={32} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-base text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sub Sole Films. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
