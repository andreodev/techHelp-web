// src/pages/Home.tsx
import { CardMenu } from '../../components/CardMenu';
import { cardsInfo } from './hooks/cardsInfo';
import { motion } from 'framer-motion';

export default function HomeView() {
  return (
    <main className="max-w-5xl mx-auto p-6 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardsInfo.map((btn, index) => (
          <motion.div
            key={btn.to}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CardMenu
              to={btn.to}
              title={btn.title}
              description={btn.description}
              icon={btn.icon}
              delay={index * 0.1}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
