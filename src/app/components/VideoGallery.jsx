"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const videos = [
  {
    id: "1156523462",
    title: "Konzernverantwortung Unterschrifteneinreichung (FR)",
    author: "Sub Sole Films",
  },
  {
    id: "1093315467",
    title: "Groupe Corbat Vendlincourt SA pour Multinationales Responsables",
    author: "Sub Sole Films",
  },
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
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleThumbnailClick = (video) => {
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-600 mb-4">
            {t('videoGallery.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('videoGallery.subtitle')}
          </p>
        </motion.div>

        {/* Featured Video */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVideo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative" style={{ padding: '56.25% 0 0 0' }}>
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
              
              {/* Video Info */}
              <div className="p-6 md:p-8 bg-gradient-to-r from-[#1B365D] to-[#2a4a7a]">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-orange-400 text-lg font-semibold">
                  {selectedVideo.author}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <span className="px-6 text-gray-500 font-semibold text-sm uppercase tracking-wider">
            {t('videoGallery.moreProjects')}
          </span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {videos
            .filter((video) => video.id !== selectedVideo.id)
            .map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleThumbnailClick(video)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative pt-[56.25%]">
                    <img
                      src={`https://vumbnail.com/${video.id}.jpg`}
                      alt={video.title}
                      className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <FaPlay className="text-white text-xl ml-1" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-lg line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VideoGallery;