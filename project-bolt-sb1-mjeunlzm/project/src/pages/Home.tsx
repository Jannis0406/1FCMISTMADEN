import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 0, 60, 0.6), rgba(30, 0, 60, 0.6)),
              url('https://images.unsplash.com/photo-1565308674684-1d8c0b4433d2?q=80&w=2333&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-white"
            >
              1. FC MISTMADEN
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-light text-white"
            >
              Da geht was!!!
            </motion.p>
            <motion.a
              href="#latest-achievements"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Unsere Erfolge
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1,
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse" 
            }}
            className="absolute bottom-8"
          >
            <ChevronDown size={32} className="text-white" />
          </motion.div>
        </section>

        {/* Latest Achievements Section */}
        <section id="latest-achievements" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Aktuelle Erfolge
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="text-purple-400 font-semibold">2024</p>
                    <h3 className="text-xl font-bold text-white">
                      Gewinner vom Insel Cup in Heimboldshausen
                    </h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🥈</span>
                  <div>
                    <p className="text-purple-400 font-semibold">2024</p>
                    <h3 className="text-xl font-bold text-white">
                      Zweiter Platz beim Hobbyturnier in Ronshausen
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;