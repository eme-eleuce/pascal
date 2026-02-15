"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { IoBulbOutline, IoDocumentTextOutline, IoVideocamOutline, IoColorPaletteOutline, IoCheckmarkCircleOutline, IoArrowForward } from "react-icons/io5"
import { useLanguage } from "../../contexts/LanguageContext"

export default function Steps() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: 1,
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
      icon: IoBulbOutline,
    },
    {
      number: 2,
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
      icon: IoDocumentTextOutline,
    },
    {
      number: 3,
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
      icon: IoVideocamOutline,
    },
    {
      number: 4,
      title: t('steps.step4.title'),
      description: t('steps.step4.description'),
      icon: IoColorPaletteOutline,
    },
    {
      number: 5,
      title: t('steps.step5.title'),
      description: t('steps.step5.description'),
      icon: IoCheckmarkCircleOutline,
    },
  ]

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
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-16 text-orange-600"
        >
          {t('steps.title')}
        </motion.h1>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden border-2 border-gray-100 hover:border-orange-300 transition-all group"
            >
              {/* Giant Background Number */}
              <div className="absolute -top-4 -right-4 text-[120px] font-black text-orange-100 group-hover:text-orange-200 transition-colors select-none">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 text-orange-600">
                  <step.icon size={48} className="group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1B365D] mb-3 min-h-[56px]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 md:mt-32 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('steps.cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {t('steps.cta.subtitle')}
            </p>
            <Link href="/projekte">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                {t('steps.cta.button')}
                <IoArrowForward size={24} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

