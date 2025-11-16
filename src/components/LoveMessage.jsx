import { motion } from 'framer-motion'
import { useState } from 'react'

const LoveMessage = () => {
  const [currentMessage, setCurrentMessage] = useState(0)

  const loveMessages = [
    {
      title: "You're My College Soulmate 👭",
      content: "Every day with you is an adventure, Muskan! From bunking classes to late-night study sessions, you make every moment memorable. You're not just my friend, you're my college family!"
    },
    {
      title: "Even While Making This... 💻",
      content: "I was laughing thinking about all our crazy moments! Remember when we both wore the same outfit by accident and pretended we planned it? Classic us! 😂"
    },
    {
      title: "You're My Person 💕",
      content: "My partner in crime, my 3 AM call friend, my everything. In a world full of fake people, you're my most genuine blessing. College wouldn't be the same without you!"
    },
    {
      title: "I Can't Wait... 🎉",
      content: "For more late-night conversations, more inside jokes, and more memories to create together. Here's to many more years of friendship and chaos!"
    },
    {
      title: "My Bestie Heart Says... 💝",
      content: "You're my chosen sister, Muskan. From the first day of college till forever, you're stuck with me! Distance means nothing when friendship means everything."
    }
  ]

  const quotes = [
    "You're my chosen family 👭",
    "Forever grateful for you 💖",
    "Best decision: being your friend ✨",
    "My favorite person 💝"
  ]

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="max-w-4xl w-full mx-4 mt-8"
    >
      {/* Main Love Messages */}
      <div className="grid gap-6 md:gap-8">
        {loveMessages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              delay: 2 + (index * 0.3), 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 ${
              index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
            }`}
          >
            <h3 className="font-romantic text-xl md:text-2xl text-pink-hot mb-4 animate-shimmer">
              {message.title}
            </h3>
            <p className="font-love text-base md:text-lg text-pink-medium leading-relaxed">
              {message.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Love Quotes Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="mt-12 bg-gradient-to-r from-pink-lightest/40 to-pink-light/20 backdrop-blur-sm rounded-3xl p-8 border border-pink-light/30"
      >
        <h3 className="font-elegant text-2xl md:text-3xl text-center text-pink-medium mb-8">
          Little Reminders of Our Friendship 💫
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 4 + (index * 0.2), duration: 0.5 }}
              className="text-center"
            >
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="font-love text-lg md:text-xl text-pink-medium bg-white/60 rounded-xl p-4 hover:bg-white/80 transition-all duration-300 cursor-pointer"
              >
                {quote}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Special Promise Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="mt-12 text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pink-light/30"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-4xl md:text-6xl mb-6"
        >
          👭
        </motion.div>
        
        <h3 className="font-romantic text-2xl md:text-3xl text-pink-hot mb-6">
          My Promise to You
        </h3>
        
        <p className="font-love text-lg md:text-xl text-pink-medium leading-relaxed max-w-2xl mx-auto">
          To always be there for you, through every laugh and every tear. To be your biggest cheerleader, 
          your partner in crime, and your forever friend. Happy Birthday, my beautiful bestie Muskan! 💕
        </p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 5.5, duration: 0.5 }}
          className="mt-8"
        >
          <p className="font-elegant text-xl md:text-2xl text-pink-medium">
            Forever and Always,
            <br />
            <span className="text-pink-hot font-romantic text-2xl md:text-3xl">
              Your Vantika 💕
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LoveMessage
