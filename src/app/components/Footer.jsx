'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaVimeo, FaLinkedin, FaInstagram } from 'react-icons/fa'
import logo from '../../../public/photos/logo.png';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#1B365D] text-white py-8">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={logo}
              alt="Sub Sole Films"
              width={400}
              height={80}
              className="w-[350px] md:w-[350px] lg:w-[450px] h-auto"
              priority
            />
          </div>

          {/* Kontakt */}
          <div className="text-center md:text-left">
            <h3 className="text-orange-600 font-bold text-lg md:text-xl mb-3">{t('footer.contact')}</h3>
            <div className="space-y-2 text-base md:text-lg">
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
            <h3 className="text-orange-600 font-bold text-lg md:text-xl mb-3">{t('footer.address')}</h3>
            <div className="space-y-2 text-base md:text-lg">
              <p className="font-medium">Gerechtigkeitsgasse 81</p>
              <p className="font-medium">3011 Bern</p>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="border-t border-gray-600 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sub Sole Films. {t('footer.copyright')}.
          </p>
          
          {/* Social Media */}
          <div className="flex items-center space-x-6">
            <Link 
              href="https://vimeo.com/user62601297" 
              target="_blank"
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaVimeo size={24} />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/pascal-gysi-186938160" 
              target="_blank"
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link 
              href="https://www.instagram.com/pascal_subsole/" 
              target="_blank"
              className="text-white hover:text-orange-600 transition-colors"
            >
              <FaInstagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
