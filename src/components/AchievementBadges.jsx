import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

const AchievementBadges = () => {
  const [unlockedBadges, setUnlockedBadges] = useState([])
  const [showNotification, setShowNotification] = useState(null)

  const badges = [
    { id: 'welcome', name: 'Welcome!', icon: '👋', description: 'You opened the page!', trigger: 'immediate' },
    { id: 'scroller', name: 'Scrolling Pro', icon: '📜', description: 'Scrolled through the page', trigger: 'scroll-50' },
    { id: 'music', name: 'Music Lover', icon: '🎵', description: 'Played the birthday song', trigger: 'music' },
    { id: 'explorer', name: 'Explorer', icon: '🔍', description: 'Viewed all sections', trigger: 'scroll-80' },
    { id: 'super-fan', name: 'Super Fan', icon: '⭐', description: 'Reached the bottom!', trigger: 'scroll-100' }
  ]

  const unlockBadge = (badgeId) => {
    if (!unlockedBadges.includes(badgeId)) {
      setUnlockedBadges([...unlockedBadges, badgeId])
      const badge = badges.find(b => b.id === badgeId)
      setShowNotification(badge)
      
      // Trigger confetti for achievement
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.9, y: 0.1 },
        colors: ['#FFB6C1', '#FFC0CB', '#FFD1DC', '#FF69B4']
      })
      
      // Play achievement sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGm98OScTgwOUKzn77RYFQkzjdPwwWsiBS15xu/glEIJE1y46duXSAwNU6vm7bNaFQk2kNbvvGYcByJ+zPDcizsIGWS67OihUBEJPJXZ8L5qHwcnhM/v4Ig+ChV3xu7dkEIKFFa46eKeUwwNU6zu7bRbFgk4kdXvvmgdByR7y+/gnEIJE1u56dqZTAwOUarn7a9YFQk1j9PwvWkbByx3zPDajjsIGGS76+mgUA8JO5PX77xpHQcpgtDv3I09ChV4w+7bj0AKFFK15+CcUwsNUarl7a5YFQk1j9PwvWkcByx3zO/Ziz0HGmS76+mgUA8IOpLV77tpHgcqgdDv3Y49Chd4wu7bj0ALELC/');
      audio.volume = 0.4;
      audio.play().catch(() => {});
      
      setTimeout(() => setShowNotification(null), 3000)
    }
  }

  useEffect(() => {
    // Welcome badge
    setTimeout(() => unlockBadge('welcome'), 1000)

    // Scroll badges
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercentage > 30 && !unlockedBadges.includes('scroller')) {
        unlockBadge('scroller')
      }
      if (scrollPercentage > 70 && !unlockedBadges.includes('explorer')) {
        unlockBadge('explorer')
      }
      if (scrollPercentage > 95 && !unlockedBadges.includes('super-fan')) {
        unlockBadge('super-fan')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [unlockedBadges])

  return (
    <>
      {/* Badge Counter */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed top-4 right-4 z-40"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border-2 border-pink-light flex items-center gap-2"
        >
          <span className="text-2xl">🏆</span>
          <span className="font-love text-pink-medium font-bold">
            {unlockedBadges.length}/{badges.length}
          </span>
        </motion.div>
      </motion.div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="fixed top-20 right-4 z-50 max-w-sm"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(255, 105, 180, 0.7)',
                  '0 0 0 20px rgba(255, 105, 180, 0)',
                ]
              }}
              transition={{ duration: 1, repeat: 2 }}
              className="bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-4xl"
                >
                  {showNotification.icon}
                </motion.div>
                <div className="text-white">
                  <p className="font-bold font-romantic text-lg">Achievement Unlocked!</p>
                  <p className="font-love text-sm">{showNotification.name}</p>
                  <p className="font-love text-xs opacity-90">{showNotification.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Badge Display Modal (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-20 right-4 z-30"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-pink-medium text-white p-3 rounded-full shadow-lg"
          title="View Badges"
        >
          <span className="text-2xl">🎖️</span>
        </motion.button>
      </motion.div>
    </>
  )
}

export default AchievementBadges
