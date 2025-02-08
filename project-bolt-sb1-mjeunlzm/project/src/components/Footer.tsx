import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-black/80 backdrop-blur text-gray-400 py-8"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} 1. FC Mistmaden |{' '}
          <Link to="/impressum" className="hover:text-purple-300 transition-colors">
            Impressum
          </Link>
        </p>
        <motion.div 
          className="mt-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href="https://www.instagram.com/fc_mistmaden"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-purple-300 transition-colors"
          >
            <Instagram size={24} />
            <span className="text-white">@fc_mistmaden</span>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;