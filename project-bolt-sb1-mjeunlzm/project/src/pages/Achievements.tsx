import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      year: 2024,
      title: 'Gewinner vom Insel Cup in Heimboldshausen',
      emoji: '🏆',
      description: 'Erster Platz beim prestigeträchtigen Insel Cup'
    },
    {
      year: 2024,
      title: 'Zweiter Platz beim Hobbyturnier in Ronshausen',
      emoji: '🥈',
      description: 'Starke Leistung beim gut besetzten Turnier'
    }
  ];

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
              Unsere Erfolge
            </motion.h1>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{achievement.emoji}</span>
                    <div>
                      <p className="text-purple-400 font-semibold">{achievement.year}</p>
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <p className="text-gray-300 mt-2">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Achievements;