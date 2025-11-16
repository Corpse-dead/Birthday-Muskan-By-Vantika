import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoveMessage from './components/LoveMessage'
import FloatingHearts from './components/FloatingHearts'
import ConfettiTrigger from './components/ConfettiTrigger'
import UnifiedAudioPlayer from './components/UnifiedAudioPlayer'
import BirthdayCard from './components/BirthdayCard'
import VirtualGiftBox from './components/VirtualGiftBox'
import ScrollFireworks from './components/ScrollFireworks'
import CandleBlowing from './components/CandleBlowing'
import PolaroidPhoto from './components/PolaroidPhoto'

function App() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Trigger content display after a brief delay
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 animate-gradient-slow"></div>
      <div className="fixed inset-0 bg-gradient-to-tl from-pink-200/30 via-transparent to-rose-200/30 animate-gradient-reverse"></div>
      {/* Unified Audio Player - Reliable cross-platform audio */}
      <UnifiedAudioPlayer />
      
      {/* Scroll-triggered Fireworks */}
      <ScrollFireworks />
      
      {/* Confetti Effect */}
      <ConfettiTrigger />
      
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Animated gradient overlay with baby pink */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-lightest/30 via-transparent to-pink-lighter/20 pointer-events-none animate-pulse-slow"></div>
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-50 min-h-screen flex flex-col items-center justify-center px-4 py-8"
      >
        {/* Main Title with enhanced styling */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-4"
          >
            <h1 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-pink-soft mb-4 animate-heartbeat relative z-50" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6), 0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              Happy 19th Birthday, Muskan! 🎉
            </h1>
          </motion.div>
          <motion.p 
            className="font-elegant text-2xl md:text-3xl text-pink-medium relative z-50"
            style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.1)' }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            From your bestie Vantika, with all my love 💕
          </motion.p>
          <motion.p 
            className="font-love text-xl md:text-2xl text-pink-medium mt-4 max-w-2xl mx-auto leading-relaxed relative z-50"
            style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.1)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            College Besties Since 2025 - Making every day an adventure! ✨🎀
          </motion.p>
        </motion.div>

        {/* Birthday Card */}
        <BirthdayCard />

        {/* Polaroid Photo */}
        <PolaroidPhoto />

        {/* Candle Blowing Interactive */}
        <CandleBlowing />

        {/* Virtual Gift Box */}
        <VirtualGiftBox />

        {/* Love Message */}
        <LoveMessage />

        {/* Footer with sparkle effect */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-12 text-center"
        >
          <motion.p 
            className="font-love text-pink-hot text-sm md:text-base drop-shadow-md"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with ❤️ by Vantika for Muskan
            <motion.span 
              className="inline-block ml-2"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.p>
          <motion.p
            className="font-elegant text-pink-medium text-xs md:text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 3 }}
          >
            Best friends since day one of college 👭💕
          </motion.p>
        </motion.footer>
      </motion.div>

      {/* Enhanced overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-lightest/10 to-transparent pointer-events-none"></div>
      
      {/* Sparkle effects */}
      <div className="absolute top-10 left-10 text-pink-light text-2xl animate-sparkle">✨</div>
      <div className="absolute top-20 right-20 text-pink-soft text-3xl animate-sparkle" style={{ animationDelay: '1s' }}>💕</div>
      <div className="absolute bottom-20 left-20 text-pink-light text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>🎀</div>
      <div className="absolute bottom-32 right-32 text-pink-soft text-2xl animate-sparkle" style={{ animationDelay: '1.5s' }}>🌸</div>
    </div>
  )
}

export default App
