import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import confetti from 'canvas-confetti'

const VirtualGiftBox = () => {
  const [openedGifts, setOpenedGifts] = useState([])
  const [currentGift, setCurrentGift] = useState(null)

  const gifts = [
    {
      id: 1,
      icon: '🎁',
      color: 'from-pink-400 to-pink-600',
      message: "You're the most amazing friend anyone could ask for! 💕",
      emoji: '🌟'
    },
    {
      id: 2,
      icon: '🎀',
      color: 'from-purple-400 to-pink-500',
      message: "Remember: You're allowed to eat ALL the cake today! 🎂",
      emoji: '🍰'
    },
    {
      id: 3,
      icon: '💝',
      color: 'from-rose-400 to-pink-600',
      message: "Thanks for always laughing at my terrible jokes! 😂",
      emoji: '🤣'
    },
    {
      id: 4,
      icon: '🎈',
      color: 'from-pink-500 to-rose-500',
      message: "Here's to another year of chaos and adventures together! 🎉",
      emoji: '🚀'
    },
    {
      id: 5,
      icon: '🌸',
      color: 'from-pink-300 to-pink-500',
      message: "You make every ordinary day feel extraordinary! ✨",
      emoji: '💫'
    },
    {
      id: 6,
      icon: '🦋',
      color: 'from-purple-300 to-pink-400',
      message: "Best decision ever: Sitting next to you in class! 🎓",
      emoji: '👭'
    }
  ]

  const openGift = (gift) => {
    if (!openedGifts.includes(gift.id)) {
      setCurrentGift(gift)
      setOpenedGifts([...openedGifts, gift.id])
      
      // Trigger confetti burst
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB6C1', '#FFC0CB', '#FFD1DC', '#FF69B4', '#FF1493']
      })
      
      // Play sound effect
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGm98OScTgwOUKzn77RYFQkzjdPwwWsiBS15xu/glEIJE1y46duXSAwNU6vm7bNaFQk2kNbvvGYcByJ+zPDcizsIGWS67OihUBEJPJXZ8L5qHwcnhM/v4Ig+ChV3xu7dkEIKFFa46eKeUwwNU6zu7bRbFgk4kdXvvmgdByR7y+/gnEIJE1u56dqZTAwOUarn7a9YFQk1j9PwvWkbByx3zPDajjsIGGS76+mgUA8JO5PX77xpHQcpgtDv3I09ChV4w+7bj0AKFFK15+CcUwsNUarl7a5YFQk1j9PwvWkcByx3zO/Ziz0HGmS76+mgUA8IOpLV77tpHgcqgdDv3Y49Chd4wu7bj0ALELC/'); 
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  }

  const closeGift = () => {
    setCurrentGift(null)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="max-w-6xl mx-auto mt-16 mb-12 px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="font-romantic text-4xl md:text-5xl text-pink-medium mb-3" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 1), 0 0 40px rgba(255, 255, 255, 0.7), 0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          Open Your Surprise Gifts! 🎁
        </h2>
        <p className="font-love text-pink-medium text-lg">
          Click each gift to reveal a special message! ({openedGifts.length}/{gifts.length} opened)
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {gifts.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.8 + index * 0.1, type: 'spring', stiffness: 200 }}
          >
            <motion.button
              onClick={() => openGift(gift)}
              disabled={openedGifts.includes(gift.id)}
              className={`
                relative w-full aspect-square rounded-2xl p-6 
                bg-gradient-to-br ${gift.color}
                ${openedGifts.includes(gift.id) ? 'opacity-50' : 'hover:scale-110 cursor-pointer'}
                transition-all duration-300 shadow-xl
              `}
              whileHover={!openedGifts.includes(gift.id) ? { 
                scale: 1.1, 
                rotate: [0, -5, 5, -5, 0],
                boxShadow: '0 20px 40px rgba(255, 105, 180, 0.4)'
              } : {}}
              whileTap={!openedGifts.includes(gift.id) ? { scale: 0.95 } : {}}
            >
              <motion.div
                animate={!openedGifts.includes(gift.id) ? {
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl md:text-7xl"
              >
                {openedGifts.includes(gift.id) ? '✨' : gift.icon}
              </motion.div>
              
              {openedGifts.includes(gift.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-4xl">✓</span>
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Gift Modal */}
      <AnimatePresence>
        {currentGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={closeGift}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`
                relative max-w-md w-full bg-gradient-to-br ${currentGift.color} 
                rounded-3xl p-8 shadow-2xl
              `}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-6 -right-6 text-6xl"
              >
                {currentGift.emoji}
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-7xl mb-6">{currentGift.icon}</div>
                <p className="font-love text-xl md:text-2xl text-white leading-relaxed">
                  {currentGift.message}
                </p>
              </motion.div>

              <motion.button
                onClick={closeGift}
                className="mt-8 w-full bg-white/20 backdrop-blur-sm text-white font-love py-3 px-6 rounded-full hover:bg-white/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close 💕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default VirtualGiftBox
