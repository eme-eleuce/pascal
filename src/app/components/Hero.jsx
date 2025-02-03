import Image from 'next/image';
import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
import fondo from '@/app/photos/hero.png';
import { MdOutlineConstruction } from "react-icons/md";
import logo from '@/app/photos/logo.png';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center" >
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
      
      
      <div className='absolute justify-center mt-[36rem] lg:mt-[37rem] md:mt-[34rem] text-white cursor-pointer'>
            <Link href='#services' scroll={true}>
               <IoIosArrowDown size={60} className='animate-heartbeat cursor-pointer'/>
            </Link>
              </div>
    </div>
  );
}

export default Hero