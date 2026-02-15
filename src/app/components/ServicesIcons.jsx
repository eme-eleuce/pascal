"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IoVideocamOutline, IoBulbOutline, IoRadioOutline, IoColorPaletteOutline } from "react-icons/io5"
import { useLanguage } from "../../contexts/LanguageContext"

export default function ServicesIcons() {
  const { t } = useLanguage();

  const icons = [
    IoVideocamOutline,      // Camera-Crew und Equipment
    IoBulbOutline,          // Konzept und Content Creation
    IoRadioOutline,         // Live-Broadcast
    IoColorPaletteOutline,  // Postproduktion
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 text-orange-600"
        >
          {t('servicesIcons.title')}
        </motion.h1>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {t('servicesIcons.items').map((item, index) => {
            const Icon = icons[index];
            return (
              <Link key={index} href="/services">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden border-2 border-gray-100 hover:border-orange-300 transition-all group cursor-pointer h-full"
                >
                  {/* Giant Background Number */}
                  <div className="absolute -top-4 -right-4 text-[120px] font-black text-orange-100 group-hover:text-orange-200 transition-colors select-none">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                    {/* Icon */}
                    <div className="mb-4 text-orange-600">
                      <Icon size={64} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1B365D] min-h-[56px] flex items-center">
                      {item}
                    </h3>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  )
}
