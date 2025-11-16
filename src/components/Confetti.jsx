import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const Confetti = () => {
  useEffect(() => {
    // Initial confetti burst with pink theme
    const initialBurst = () => {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#FFE4E9', '#FFB6D9']
      })
    }

    // Multiple bursts with delays
    const timeouts = []
    
    // First burst immediately
    timeouts.push(setTimeout(initialBurst, 500))
    
    // Second burst
    timeouts.push(setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FFE4E9']
      })
    }, 1000))
    
    // Third burst
    timeouts.push(setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#FF1493', '#FFB6D9', '#FFC0CB', '#FFE4E9']
      })
    }, 1500))

    // Continuous sparkles
    const sparkleInterval = setInterval(() => {
      confetti({
        particleCount: 3,
        spread: 360,
        origin: { 
          x: Math.random(), 
          y: Math.random() * 0.5 
        },
        colors: ['#FFD700', '#FFA726', '#26C6DA'],
        gravity: 0.3,
        scalar: 0.8
      })
    }, 3000)

    // Cleanup function
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
      clearInterval(sparkleInterval)
    }
  }, [])

  // The component doesn't render anything visible
  return null
}

export default Confetti
