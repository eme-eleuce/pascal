"use client"
import Image from "next/image"
import { motion } from 'framer-motion';
import social from '../../../public/photos/social-media-clips.jpg'
import video from '../../../public/photos/video.jpg'
import photography from '../../../public/photos/photography.jpg'
import documentalism from '../../../public/photos/documentalism.jpg'
import postproduction from '../../../public/photos/postproduction.jpg'

const services = [
  {
    title: "Social Media Clips",
    description: "Spannende und relevante Geschichten - prägnant, zeitgemäss und effektiv in Bilder verpackt.",
    image: social,
  },
  {
    title: "Imagefilm",
    description: "Die Essenz eurer Firma kompakt in Form von Bewegtbild kommuniziert.",
    image: video,
  },
  {
    title: "Eventfilm",
    description: "Das Firmenjubiläum, die Präsentation eines neuen Produkts, Messebesuche oder die Eröffnung eines neuen Firmenstandorts als Bewegtbild vermittelt.",
    image: photography,
  },
  {
    title: "Reportagen",
    description: "Nah am Menschen – bringt den Kunden näher an eure Firma.",
    image: documentalism,
  },
  {
    title: "Postproduktion",
    description: "Ihr habt bestehendes Bildmaterial, doch es fehlen die Ressourcen und das Know-How das ganze zu einem Produkt zusammenzufügen.",
    image: postproduction,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
}

const Services = () => {
  return (
    <section id="services" className="w-full min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 mb-4">
            Unser Angebot
          </h1>
          
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services



