import { Link } from 'react-router-dom';

interface CardMenuProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number; 
  textButton?: string;
}

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Button from '../button';

export function CardMenu({ to, icon, title, description, delay = 0, textButton }: CardMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Link
        to={to}
        className="block p-6 bg-white rounded-2xl border hover:shadow-md transition group h-full"
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
          <h2 className="text-lg font-semibold group-hover:text-blue-600 transition">
            {title}
          </h2>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <Button className="inline-block mt-4 text-sm text-blue-600 group-hover:underline ">
          {textButton || 'Acessar a página'}
        </Button>
      </Link>
    </motion.div>
  );
}
