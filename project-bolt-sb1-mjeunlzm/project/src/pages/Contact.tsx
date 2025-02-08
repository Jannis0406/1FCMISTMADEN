import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Mail, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
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
              Kontakt
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="card"
              >
                <Mail className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">E-Mail</h3>
                <a
                  href="mailto:fcmistmaden@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  fcmistmaden@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.1 }}
                className="card"
              >
                <Instagram className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/fc_mistmaden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  @fc_mistmaden
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.2 }}
                className="card"
              >
                <MapPin className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Region</h3>
                <p className="text-gray-300">
                  Hersfeld-Rotenburg, Hessen
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;