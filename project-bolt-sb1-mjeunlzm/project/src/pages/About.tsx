import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Users, Trophy, Calendar } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="page-title"
            >
              Über uns
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card"
              >
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Unser Team</h3>
                <p className="text-gray-300">
                  Eine Gruppe von fußballbegeisterten Freunden, die seit Jahren zusammen spielen und Spaß am Sport haben.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <Trophy className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Unsere Mission</h3>
                <p className="text-gray-300">
                  Mit Leidenschaft und Teamgeist nehmen wir an Hobbyturnieren teil und streben nach kontinuierlicher Verbesserung.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <Calendar className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Geschichte</h3>
                <p className="text-gray-300">
                  Gegründet aus der Liebe zum Fußball, sind wir im Umkreis Hersfeld-Rotenburg aktiv und erfolgreich.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;