import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const InteractiveDiary = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const diaryPages = [
    {
      date: "Day 1 of College",
      message: "Remember when we first met? You asked me if I knew where the canteen was, and I confidently walked you to the library instead! 😂 That's when I knew we'd be besties - you laughed instead of judging my directional skills!",
      emoji: "🤦‍♀️"
    },
    {
      date: "The Attendance Drama",
      message: "That time you tried to answer attendance for both of us and said 'Present' in TWO different voices! The whole class burst out laughing and even the professor couldn't keep a straight face. We still got marked absent though 😅",
      emoji: "😂"
    },
    {
      date: "Canteen Chronicles",
      message: "Every time we go to the canteen, you order something 'healthy' and then end up eating most of MY samosas! And you still claim you're on a diet. Muskan, bestie, we need to talk about this betrayal! 🍟😤",
      emoji: "🍔"
    },
    {
      date: "Assignment Panic Mode",
      message: "2 AM the night before submission, both of us on a video call, crying over our laptops. You: 'I'm never procrastinating again!' Also you the next time: 'Vantika, kab submission hai?' CLASSIC MUSKAN! 😭📚",
      emoji: "😱"
    },
    {
      date: "Your Singing in the Bathroom",
      message: "That day you thought you were alone in the washroom and were singing 'Maana Ke Hum Yaar Nahin' at the TOP of your lungs! Plot twist: There were 5 other people in there trying not to laugh! Your face when you realized... PRICELESS! 🎤😳",
      emoji: "🎵"
    },
    {
      date: "The Group Project Chaos",
      message: "When we got paired for that project and spent more time choosing aesthetic fonts and color schemes than actually working on the content. Our presentation looked gorgeous but we had NO IDEA what we were presenting about! 💅✨",
      emoji: "💻"
    },
    {
      date: "Random 3 AM Thoughts",
      message: "You: *texts at 3 AM* 'Are we living or just existing?' Me: 'Muskan, we have an exam in 5 hours, GO TO SLEEP!' You: 'But like... philosophically...' This is why we're besties AND why we're always tired! 🌙💤",
      emoji: "🤔"
    },
    {
      date: "Forever Grateful",
      message: "Through all the chaos, laughter, tears, and endless memes... I'm so lucky to have found my person in college. Here's to many more years of being chaotically perfect together! Happy Birthday, you beautiful disaster! 🎉💕",
      emoji: "🥳"
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % diaryPages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + diaryPages.length) % diaryPages.length)
  }

  const goToPage = (index) => {
    setCurrentPage(index)
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="max-w-2xl mx-auto mt-12 mb-8"
    >
      {/* Diary Header with enhanced styling */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="text-center mb-6"
      >
        <motion.h2 
          className="font-romantic text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-deep via-pink-hot to-pink-medium mb-2"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Our Friendship Diary 📖✨
        </motion.h2>
        <motion.p 
          className="font-love text-pink-hot text-xl"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Pages from my heart to yours, bestie! 💕
        </motion.p>
      </motion.div>

      {/* Diary Book with shadow and glow effects */}
      <motion.div 
        className="relative bg-gradient-to-br from-pink-light to-pink-soft rounded-2xl shadow-2xl p-1 border-4 border-pink-candy"
        whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(255, 105, 180, 0.6)" }}
      >
        {/* Book Spine Effect with improved styling */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-b from-pink-hot via-pink-medium to-pink-deep rounded-l-2xl border-r-2 border-pink-hot shadow-inner">
          <div className="flex flex-col justify-center h-full space-y-2 items-center">
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i} 
                className="w-1.5 h-6 bg-pink-lightest rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Page Content with enhanced background */}
        <div className="ml-10 bg-gradient-to-br from-white-cream via-white-pearl to-pink-lightest rounded-r-2xl rounded-l-lg min-h-[450px] relative overflow-hidden shadow-inner">
          {/* Page Lines with subtle animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div 
                key={i} 
                className="border-b border-pink-light/30 h-6"
                style={{ marginTop: `${i * 26 + 60}px` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>

          {/* Decorative corner bookmark */}
          <div className="absolute top-0 right-6 w-8 h-12 bg-gradient-to-b from-pink-hot to-pink-medium rounded-b-lg shadow-lg"></div>

          {/* Red Margin Line with glow */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-pink-hot/80 shadow-sm shadow-pink-hot/50"></div>

          {/* Page Content */}
          <div className="relative z-10 p-8 pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Date Header with enhanced styling */}
                <div className="flex items-center justify-between mb-4">
                  <motion.h3 
                    className="font-elegant text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-deep to-pink-hot"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    {diaryPages[currentPage].date}
                  </motion.h3>
                  <motion.span 
                    className="text-4xl"
                    animate={{ 
                      rotate: [0, -15, 15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {diaryPages[currentPage].emoji}
                  </motion.span>
                </div>

                {/* Message with improved typography */}
                <motion.div
                  className="bg-pink-lightest/20 rounded-xl p-4 backdrop-blur-sm border border-pink-soft/30"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.p 
                    className="font-love text-lg md:text-xl text-pink-deep leading-relaxed"
                    whileHover={{ scale: 1.02 }}
                  >
                    {diaryPages[currentPage].message}
                  </motion.p>
                </motion.div>

                {/* Signature with flourish */}
                <motion.div 
                  className="text-right mt-8 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="absolute -top-2 right-0 text-pink-candy text-xl">~</div>
                  <p className="font-romantic text-xl md:text-2xl text-pink-medium">
                    Forever your bestie,
                    <br />
                    <motion.span 
                      className="text-transparent bg-clip-text bg-gradient-to-r from-pink-hot to-pink-deep text-2xl md:text-3xl inline-block"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Vantika 💕
                    </motion.span>
                  </p>
                  <div className="absolute -bottom-2 right-0 text-pink-candy text-xl">~</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page Number with styling */}
          <motion.div 
            className="absolute bottom-4 right-6 text-pink-medium font-love text-sm bg-pink-lightest/50 px-3 py-1 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Page {currentPage + 1} of {diaryPages.length}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Navigation Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <motion.button
          onClick={prevPage}
          className="bg-gradient-to-r from-pink-medium to-pink-hot text-white-pure px-6 py-3 rounded-full hover:from-pink-hot hover:to-pink-deep transition-all duration-300 font-love shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(255, 105, 180, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          ← Previous
        </motion.button>

        {/* Page Dots with enhanced interactivity */}
        <div className="flex space-x-2">
          {diaryPages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToPage(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'w-10 h-3 bg-gradient-to-r from-pink-medium to-pink-hot' 
                  : 'w-3 h-3 bg-pink-lightest hover:bg-pink-candy'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentPage ? { scale: [1, 1.1, 1] } : {}}
              transition={index === currentPage ? { duration: 1, repeat: Infinity } : {}}
            />
          ))}
        </div>

        <motion.button
          onClick={nextPage}
          className="bg-gradient-to-r from-pink-medium to-pink-hot text-white-pure px-6 py-3 rounded-full hover:from-pink-hot hover:to-pink-deep transition-all duration-300 font-love shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: "0 10px 25px rgba(255, 105, 180, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Next →
        </motion.button>
      </div>
    </motion.div>
  )
}

export default InteractiveDiary
