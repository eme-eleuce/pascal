"use client"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Image from "next/image"
import { motion } from 'framer-motion';
import social from '@/app/photos/social-media-clips.jpg'
import video from '@/app/photos/video.jpg'
import photography from '@/app/photos/photography.jpg'
import documentalism from '@/app/photos/documentalism.jpg'
import postproduction from '@/app/photos/postproduction.jpg'




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

const ParallaxServices = () => {
  return (
    <ParallaxProvider>
      <section id="services" className="w-full min-h-screen">
      <div className="absolute w-full z-10 flex justify-center pt-12">
      <motion.h1
    initial={{ opacity: 0, y: -20 }} // Estado inicial: invisible y desplazado hacia arriba
    whileInView={{ opacity: 1, y: 0 }} // Animación cuando el elemento es visible
    viewport={{ once: true }} // La animación solo se ejecuta una vez
    transition={{ duration: 1.5, ease: "easeOut" }} // Duración y curva de la animación
    className="text-5xl lg:text-[70px] font-bold text-white p-6 text-center"
  >
    Unser Angebot
  </motion.h1>
        </div>
        {services.map((service, index) => (
          <div key={index} className="h-screen relative flex items-center justify-center overflow-hidden">
            {/* Solo la imagen tiene el efecto de parallax */}
            <Parallax speed={-1} easing="easeInQuad" scale={[1.05, 1.5]} className="absolute inset-0 z-0">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                objectFit="cover"
                className=""
              />
            </Parallax>

            {/* El título y la descripción están fuera del parallax */}
            <div className="container mx-auto lg:ml-5 px-4 z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-5 bg-white bg-opacity-80 p-6 rounded-lg shadow-xl shadow-orange-700/50">
                  <h2 className="lg:text-4xl text-2xl font-bold mb-4 text-orange-600">{service.title}</h2>
                  <p className="lg:text-xl text-md text-gray-800">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </ParallaxProvider>
  )
}

export default ParallaxServices



