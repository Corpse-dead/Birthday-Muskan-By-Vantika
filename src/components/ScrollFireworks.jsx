import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const ScrollFireworks = () => {
  useEffect(() => {
    let hasTriggered25 = false
    let hasTriggered50 = false
    let hasTriggered75 = false
    let hasTriggered100 = false

    const triggerFireworks = (intensity = 1) => {
      const count = 50 * intensity
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#FFE4E9', '#FFB6D9']
      }

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        })
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      })

      fire(0.2, {
        spread: 60,
      })

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      })

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      })

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      })

      // Play firework sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGGm98OScTgwOUKzn77RYFQkzjdPwwWsiBS15xu/glEIJE1y46duXSAwNU6vm7bNaFQk2kNbvvGYcByJ+zPDcizsIGWS67OihUBEJPJXZ8L5qHwcnhM/v4Ig+ChV3xu7dkEIKFFa46eKeUwwNU6zu7bRbFgk4kdXvvmgdByR7y+/gnEIJE1u56dqZTAwOUarn7a9YFQk1j9PwvWkbByx3zPDajjsIGGS76+mgUA8JO5PX77xpHQcpgtDv3I09ChV4w+7bj0AKFFK15+CcUwsNUarl7a5YFQk1j9PwvWkcByx3zO/Ziz0HGmS76+mgUA8IOpLV77tpHgcqgdDv3Y49Chd4wu7bj0ALELC/');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercentage >= 25 && !hasTriggered25) {
        hasTriggered25 = true
        triggerFireworks(0.8)
      }
      
      if (scrollPercentage >= 50 && !hasTriggered50) {
        hasTriggered50 = true
        triggerFireworks(1)
      }
      
      if (scrollPercentage >= 75 && !hasTriggered75) {
        hasTriggered75 = true
        triggerFireworks(1.2)
      }
      
      if (scrollPercentage >= 95 && !hasTriggered100) {
        hasTriggered100 = true
        // Big finale
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration

        const interval = setInterval(() => {
          const timeLeft = animationEnd - Date.now()

          if (timeLeft <= 0) {
            return clearInterval(interval)
          }

          const particleCount = 50 * (timeLeft / duration)
          
          confetti({
            particleCount,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              y: Math.random() - 0.2
            },
            colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#FFE4E9']
          })
        }, 250)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}

export default ScrollFireworks
