import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const BirthdayCard = () => {
  const handleCakeClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFB6C1', '#FFC0CB', '#FFD1DC', '#FF69B4', '#FF1493']
    })
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(255, 192, 203, 0.4)" }}
      className="bg-gradient-to-br from-white via-pink-50 to-rose-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-2xl w-full mx-4 shadow-2xl border-2 border-pink-light/30"
    >
      <div className="text-center relative">
        {/* Decorative stars */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -left-4 text-3xl"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 text-3xl"
        >
          ✨
        </motion.div>
        
        {/* Cake Icon with candles animation */}
        <motion.div
          onClick={handleCakeClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            rotate: [0, -5, 5, 0],
            y: [0, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="text-7xl md:text-9xl mb-6 relative cursor-pointer"
        >
          🎂
          <motion.span
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-4xl"
          >
            🕯️
          </motion.span>
        </motion.div>

        {/* Main Birthday Message with gradient text */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="font-elegant text-4xl md:text-5xl mb-6 leading-relaxed"
        >
          <span className="text-pink-medium">Another Year of</span>
          <br />
          <motion.span 
            className="text-pink-soft font-romantic text-5xl md:text-6xl inline-block"
            style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.1)' }}
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Pure Awesomeness! 
          </motion.span>
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block ml-2"
          >
            ✨
          </motion.span>
        </motion.h2>

        {/* Personal Message with enhanced styling */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="space-y-4 bg-pink-lightest/20 rounded-2xl p-6 backdrop-blur-sm"
        >
          <motion.p 
            className="font-love text-xl md:text-2xl text-pink-medium leading-relaxed"
            whileHover={{ scale: 1.05 }}
          >
            Happy 19th Birthday to my amazing college bestie, Muskan! 🎉
          </motion.p>
          <motion.p 
            className="font-love text-lg md:text-xl text-pink-hot leading-relaxed"
            whileHover={{ scale: 1.05 }}
          >
            You're not just my friend, you're my college family! Here's to another year of epic memories together! 🎂💕
          </motion.p>
          <motion.p 
            className="font-love text-base md:text-lg text-pink-medium leading-relaxed italic"
            whileHover={{ scale: 1.05 }}
          >
            Here's to more adventures, more memories, and more chaos together! 💫
          </motion.p>
        </motion.div>

        {/* Enhanced heart decorations with floating effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="flex justify-center space-x-6 mt-8"
        >
          {[
            { emoji: '💕', delay: 0 },
            { emoji: '🎉', delay: 0.3 },
            { emoji: '👭', delay: 0.6 },
            { emoji: '💖', delay: 0.9 },
            { emoji: '💕', delay: 1.2 }
          ].map((item, index) => (
            <motion.span
              key={index}
              onClick={handleCakeClick}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: item.delay
              }}
              whileHover={{ scale: 1.5, rotate: 360 }}
              className="text-3xl md:text-4xl cursor-pointer"
            >
              {item.emoji}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-6 flex justify-center gap-3"
        >
          {['🌸', '🎀', '🦋', '🌺'].map((emoji, i) => (
            <motion.span
              key={i}
              onClick={handleCakeClick}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="text-2xl opacity-70"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BirthdayCard
