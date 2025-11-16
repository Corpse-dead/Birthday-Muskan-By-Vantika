import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const CandleBlowing = () => {
  const [candlesLit, setCandlesLit] = useState([true, true, true])
  const [allBlown, setAllBlown] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const blowCandle = (index) => {
    const newCandles = [...candlesLit]
    newCandles[index] = false
    setCandlesLit(newCandles)
    
    // Play blow sound
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGm98OScTgwOUKzn77RYFQkzjdPwwWsiBS15xu/glEIJE1y46duXSAwNU6vm7bNaFQk2kNbvvGYcByJ+zPDcizsIGWS67OihUBEJPJXZ8L5qHwcnhM/v4Ig+');
    audio.volume = 0.3;
    audio.play().catch(() => {});
    
    if (newCandles.every(candle => !candle)) {
      setAllBlown(true)
      setShowCelebration(true)
      
      // Play celebration sound
      setTimeout(() => {
        const celebAudio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGm98OScTgwOUKzn77RYFQkzjdPwwWsiBS15xu/glEIJE1y46duXSAwNU6vm7bNaFQk2kNbvvGYcByJ+zPDcizsIGWS67OihUBEJPJXZ8L5qHwcnhM/v4Ig+ChV3xu7dkEIKFFa46eKeUwwNU6zu7bRbFgk4kdXvvmgdByR7y+/gnEIJE1u56dqZTAwOUarn7a9YFQk1j9PwvWkbByx3zPDajjsIGGS76+mgUA8JO5PX77xpHQcpgtDv3I09ChV4w+7bj0AKFFK15+CcUwsNUarl7a5YFQk1j9PwvWkcByx3zO/Ziz0HGmS76+mgUA8IOpLV77tpHgcqgdDv3Y49Chd4wu7bj0ALELC/');
        celebAudio.volume = 0.5;
        celebAudio.play().catch(() => {});
      }, 200)
      
      setTimeout(() => setShowCelebration(false), 4000)
    }
  }

  const resetCandles = () => {
    setCandlesLit([true, true, true])
    setAllBlown(false)
    setShowCelebration(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3, duration: 0.8 }}
      className="max-w-2xl mx-auto mt-12 mb-8 px-4"
    >
      <div className="bg-gradient-to-br from-white via-pink-50 to-rose-50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-light/30">
        <div className="text-center">
          <motion.h2
            className="font-romantic text-3xl md:text-4xl text-pink-medium mb-4"
            style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.6)' }}
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Make a Wish! 🎂
          </motion.h2>
          
          <p className="font-love text-pink-medium mb-8">
            Click each candle to blow it out!
          </p>

          {/* Cake with Candles */}
          <div className="relative inline-block">
            <motion.div
              animate={{ 
                rotate: allBlown ? 0 : [0, -2, 2, -2, 0],
                y: allBlown ? 0 : [0, -5, 0]
              }}
              transition={{ duration: 2, repeat: allBlown ? 0 : Infinity }}
              className="text-8xl md:text-9xl mb-4"
            >
              🎂
            </motion.div>

            {/* Candles */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-8">
              {candlesLit.map((isLit, index) => (
                <motion.button
                  key={index}
                  onClick={() => isLit && blowCandle(index)}
                  disabled={!isLit}
                  className="relative cursor-pointer"
                  whileHover={isLit ? { scale: 1.2, y: -5 } : {}}
                  whileTap={isLit ? { scale: 0.9 } : {}}
                >
                  <motion.span
                    animate={isLit ? {
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                      y: [0, -3, 0]
                    } : {}}
                    transition={isLit ? { duration: 0.8, repeat: Infinity } : {}}
                    className="text-4xl"
                  >
                    {isLit ? '🕯️' : '💨'}
                  </motion.span>
                  {isLit && (
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl"
                    >
                      🔥
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          {allBlown && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={resetCandles}
              className="mt-6 bg-gradient-to-r from-pink-medium to-pink-hot text-white px-6 py-3 rounded-full font-love hover:from-pink-hot hover:to-pink-deep transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Light Again 🔥
            </motion.button>
          )}
        </div>
      </div>

      {/* Celebration Message */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="bg-gradient-to-r from-pink-400 to-pink-600 rounded-3xl p-8 shadow-2xl"
            >
              <p className="font-romantic text-4xl md:text-5xl text-white text-center">
                🎉 Wish Made! 🎉
              </p>
              <p className="font-love text-xl text-white text-center mt-4">
                May all your dreams come true! ✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CandleBlowing
