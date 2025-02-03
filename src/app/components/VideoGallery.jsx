"use client";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const videos = [
  {
    id: "773975481",
    title: "Swiss O Week 2023 Trailer",
    author: "Sub Sole Films",
  },
  {
    id: "773975126",
    title: "E-MTB Schweizermeisterschaft 2022",
    author: "Sub Sole Films",
  },
  {
    id: "433622789",
    title: "Dedo's Golden Hour - Dedolight Lighting Tutorial",
    author: "Sub Sole Films",
  },
  {
    id: "864562888",
    title: "That one Moment",
    author: "Sub Sole Films",
  },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detectar si es un dispositivo táctil al montar el componente
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleThumbnailClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <motion.h1
    initial={{ opacity: 0, y: -20 }} // Estado inicial: invisible y desplazado hacia arriba
    whileInView={{ opacity: 1, y: 0 }} // Animación cuando el elemento es visible
    viewport={{ once: true }} // La animación solo se ejecuta una vez
    transition={{ duration: 1.5, ease: "easeOut" }} // Duración y curva de la animación
    className="text-5xl lg:text-[70px] font-bold text-orange-600 py-16 text-center mb-8"
  >
    Einige Projekte
  </motion.h1>
      {/* Featured Video */}
      <div className="mb-6 max-w-5xl mx-auto">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src={`https://player.vimeo.com/video/${selectedVideo.id}?h=c97e587f13`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#1B365D]">{selectedVideo.title}</h2>
        <p className="text-gray-600 text-md">{selectedVideo.author}</p>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos
          .filter((video) => video.id !== selectedVideo.id)
          .map((video) => (
            <div
              key={video.id}
              className="relative pt-[56.25%] rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => handleThumbnailClick(video)}
            >
              <div className="absolute top-0 left-0 w-full h-full hover:scale-105 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={`https://vumbnail.com/${video.id}.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 
                    group-hover:bg-opacity-50 transition-all duration-300"
                >
                  <h3 
                    className="text-white text-center px-4 py-2 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300 
                      font-semibold text-lg"
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoGallery;