"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function ProcessSteps({ steps, className = "" }) {
  const [activeStep, setActiveStep] = useState(0)
  const controls = useAnimation()
  const stepRefs = useRef(steps.map(() => useRef(null)))

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index)
            controls.start("visible")
          }
        },
        { threshold: 0.5 },
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className={`max-w-5xl mx-auto p-6 py-10 ${className}`}>
      <motion.div variants={containerVariants} initial="hidden" animate={controls}>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            ref={stepRefs.current[index]}
            variants={stepVariants}
            className={`flex gap-12 md:gap-16 items-start group mb-24
              ${activeStep === index ? "opacity-100" : "opacity-60"}`}
          >
            <motion.div className="flex-shrink-0" variants={numberVariants}>
              <motion.div
                className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 text-[8rem] md:text-[12rem] font-bold"
                style={{ color: "#FF7F50" }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.number}
              </motion.div>
            </motion.div>

            <div className="flex-grow pt-4">
              <motion.h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#1B365D" }}>
                {step.title}
              </motion.h3>
              <motion.p className="text-gray-700 text-lg md:text-xl leading-relaxed">{step.description}</motion.p>

              <motion.div
                className="h-1.5 bg-[#FF7F50] mt-6"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: activeStep >= index ? 1 : 0,
                  transition: { duration: 0.5 },
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}