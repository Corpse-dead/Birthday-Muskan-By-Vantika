import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const PolaroidPhoto = () => {
  const photos = [
    { src: '/friendship-photo.jpg', caption: 'College Days 2025 💕', subtitle: 'Making memories that last forever ✨' },
    { src: '/2.jpg', caption: 'Best Friends Forever 👭', subtitle: 'Through thick and thin ✨' },
    { src: '/3.jpg', caption: 'Squad Goals 💖', subtitle: 'Adventures and laughter 🎉' },
    { src: '/4.jpg', caption: 'Unforgettable Moments 🌸', subtitle: 'Captured forever 📸' },
    { src: '/5.jpg', caption: 'Together Always 💕', subtitle: 'Our friendship story 💫' }
  ]

  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextPhoto = () => {
    setDirection(1)
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setDirection(-1)
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextPhoto()
    }, 4000)
    return () => clearInterval(timer)
  }, [currentPhoto])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 10 : -10
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotate: direction < 0 ? 10 : -10
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="font-romantic text-4xl md:text-5xl text-center text-pink-medium mb-8"
        style={{ textShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.7)' }}
      >
        Our Memory Gallery 📸
      </motion.h2>

      {/* Sliding Photo Carousel */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPhoto}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.4 },
              rotate: { duration: 0.4 }
            }}
            className="absolute w-full max-w-md"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 30px 60px -12px rgba(255, 105, 180, 0.6)'
              }}
              className="bg-white p-4 pb-16 rounded-lg shadow-2xl"
              style={{ 
                boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 20px 40px rgba(0,0,0,0.15)',
                background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 85%, #f5f5f5 100%)'
              }}
            >
              {/* Photo Container */}
              <div className="relative aspect-square rounded overflow-hidden bg-white">
                <img 
                  src={photos[currentPhoto].src} 
                  alt={photos[currentPhoto].caption}
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.1)' }}
                />
                
                {/* Photo corner decorations */}
                <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-white/50 rounded-tl"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-white/50 rounded-tr"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-white/50 rounded-bl"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-white/50 rounded-br"></div>
              </div>
              
              {/* Polaroid Caption */}
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="font-romantic text-xl md:text-2xl text-pink-medium drop-shadow-lg" style={{ fontFamily: 'Caveat, cursive' }}>
                  {photos[currentPhoto].caption}
                </p>
                <p className="font-love text-sm md:text-base text-pink-soft drop-shadow mt-2">
                  {photos[currentPhoto].subtitle}
                </p>
              </motion.div>

              {/* Tape effect on top */}
              <div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-yellow-100/60 backdrop-blur-sm"
                style={{
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-2 md:left-4 z-10 bg-white/90 hover:bg-pink-100 text-pink-medium p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextPhoto}
          className="absolute right-2 md:right-4 z-10 bg-white/90 hover:bg-pink-100 text-pink-medium p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentPhoto ? 1 : -1)
              setCurrentPhoto(index)
            }}
            className={`transition-all duration-300 rounded-full ${
              currentPhoto === index 
                ? 'w-12 h-4 bg-pink-medium shadow-lg' 
                : 'w-4 h-4 bg-pink-light hover:bg-pink-soft'
            }`}
          />
        ))}
      </div>

      {/* Photo Counter */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-center mt-4 font-love text-pink-medium text-lg"
      >
        {currentPhoto + 1} / {photos.length}
      </motion.p>
    </div>
  )
}

export default PolaroidPhoto
