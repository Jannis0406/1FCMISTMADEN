import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
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
              Turniere
            </motion.h1>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-purple-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Nächste Turniere</h3>
                      <p className="text-gray-400 mt-2">
                        Aktuell sind keine Turniere geplant. Schau später wieder vorbei!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold mb-4">Interesse an einem Turnier?</h3>
                <p className="text-gray-300">
                  Wir sind immer auf der Suche nach neuen Herausforderungen. Kontaktiere uns für Turniereinladungen oder Freundschaftsspiele.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Events;