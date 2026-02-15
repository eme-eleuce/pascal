import Link from 'next/link';
import {IoIosArrowDown} from 'react-icons/io';
import { MdOutlineConstruction } from "react-icons/md";
import logo from '../../../public/photos/logo.png';

const Hero = () => {
  return (
    <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" >
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/20250130 Sub Sole Films Header Movie.mov" type="video/quicktime" />
          <source src="/videos/20250130 Sub Sole Films Header Movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10">
        
      </div>
      
      
      
    </div>
  );
}

export default Hero