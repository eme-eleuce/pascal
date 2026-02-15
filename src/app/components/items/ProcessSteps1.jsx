"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function ProcessStepsParallax({ steps, className = "" }) {
  const containerRef = useRef(null)
  const [containerHeight, setContainerHeight] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`} 
      style={{ 
        height: `${(steps.length + 1) * 100}vh`,
        zIndex: 1
      }}
    >
      {steps.map((step, index) => (
        <ParallaxStep
          key={step.number}
          step={step}
          index={index}
          progress={scrollYProgress}
          totalSteps={steps.length}
        />
      ))}
    </div>
  )
}

function ParallaxStep({ step, index, progress, totalSteps }) {
  const stepRef = useRef(null)

  const yRange = useTransform(
    progress,
    [index / totalSteps, (index + 1) / totalSteps],
    ['0%', '-10%']
  )

  const opacityRange = useTransform(
    progress,
    [index / totalSteps, (index + 0.3) / totalSteps, (index + 1) / totalSteps],
    [0, 1, 0],
  )

  const scale = useTransform(progress, [index / totalSteps, (index + 0.3) / totalSteps], [0.8, 1])

  return (
    <motion.div
      ref={stepRef}
      className="fixed inset-0 w-full h-screen flex items-center justify-center"
      style={{ 
        opacity: opacityRange, 
        y: yRange,
        pointerEvents: "none",
        zIndex: 10
      }}
    >
      <motion.div 
        className="rounded-lg shadow-xl p-8 max-w-5xl mx-4" 
        style={{ 
          scale,
          pointerEvents: "auto",
          zIndex: 20
        }}
      >
        <div className="flex flex-row items-center gap-8">
          <motion.div 
            className="text-[8rem] md:text-[12rem] font-bold shrink-0" 
            style={{ color: "#FF7F50" }}
          >
            {step.number}
          </motion.div>
          <div className="flex flex-col text-left">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4" style={{ color: "#1B365D" }}>
              {step.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700">{step.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}