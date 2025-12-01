import Image from 'next/image';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
import fondo from '../../../public/photos/hero.png';
import { MdOutlineConstruction } from "react-icons/md";
import logo from '../../../public/photos/logo.png';

const Hero = () => {
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={fondo}
          alt="/"
          fill
          objectFit="cover"
          priority
          quality={70}
          placeholder='blur'
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10">
        
      </div>
      
      
      
    </div>
  );
}

export default Hero