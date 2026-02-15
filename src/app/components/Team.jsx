"use client"

import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import pascal from "../../../public/photos/pascal.png";
import jan from "../../../public/photos/jan.png";
import jorge from "../../../public/photos/yoyo.png";
import carleche from "../../../public/photos/carleche.png";
import Image from 'next/image'
import { useLanguage } from "../../contexts/LanguageContext"

const images = [pascal, jan, jorge, carleche];
const objectPositions = ["center 5%", "center 5%", "center 15%", "center 5%"];

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
  const { t } = useLanguage();
  
  const teamMembers = t('team.members').map((member, index) => ({
    ...member,
    image: images[index],
    objectPosition: objectPositions[index]
  }));
  
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
            {t('team.title')}
          </motion.h2>
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team

