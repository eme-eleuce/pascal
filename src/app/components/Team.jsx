"use client"

import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import pascal from "@/app/photos/pascal.png";
import jan from "@/app/photos/jan.png";
import jorge from "@/app/photos/yoyo.png";
import carleche from "@/app/photos/carleche.png";
import Image from 'next/image'

const teamMembers = [
  {
    name: "Pascal Gysi",
    role: "Gründer, DOP, Produzent",
    description:
      "Als studierter Sozialanthropologe, Linguist und unbelehrbarer Perfektionist macht er sich die nötigen Überlegungen schon lange vor dem Filmen der ersten Einstellung.Timing, Inszenierung, Komposition, Beleuchtung – An einem perfekten Dreh ist nichts dem Zufall überlassen.",
    image: pascal,
    objectPosition: "center 5%",
  },
  {
    name: "Jan Baumgartner",
    role: "Kamera/Regie",
    description: "Technik-affiner Kameramann mit viel Erfahrung in Liveproduktionen. Er behält die Ruhe auf de hektischen Set.",
    image: jan,
    objectPosition: "center 5%",
  },
  {
    name: "Jorge Delgado",
    role: "Postproduktion/Editor",
    description: "Cineast und DOP mit langjähriger Erfahrung in der Produktion und Postproduktion. Er vervollständigt das geﬁlmte Material und führt Bild und Ton in Zusammenarbeit mit Pascal Gysi zu einem runden Produkt zusammen.",
    image: jorge,
    objectPosition: "center 15%",
  },
  {
    name: "Carlos Zambrano",
    role: "Colorist/Editor",
    description: "Sieht die Welt in RGB und CMYK und träumt von Codecs und Bildformaten. Er verpasst dem Material den letzten Schliff  und stimmt das Ausgabeformat auf eure Bedürfnisse ab.",
    image: carleche,
    objectPosition: "center 5%",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.6
    },
  },
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

function Team() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={textVariants}
            className="text-5xl md:text-8xl font-bold mb-16 text-orange-600"
          >
            Triff unser Team
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="text-lg font-bold max-w-3xl mx-auto mb-32"
          >
            Seit 2018 produziert Sub Sole Films erfolgreich Bewegtbild. Vom Konzept bis zur Postproduktion. Dieses Team macht es möglich:
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="rounded-lg overflow-hidden backdrop-blur-sm shadow-lg shadow-black/30 flex flex-col"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.objectPosition }}
                  priority={index === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow text-center">
                  <h3 className="text-3xl font-bold mb-1 text-orange-600">{member.name}</h3>
                  <p className="text-lg mb-5 font-semibold">{member.role}</p>
                  <p className="text-md mb-4 text-justify">{member.description}</p>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="#" className="hover:text-orange-600 transition-colors">
                    <FaLinkedin className="w-7 h-7" />
                  </a>
                  <a href="#" className="hover:text-orange-600 transition-colors">
                    <FaInstagram className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team

