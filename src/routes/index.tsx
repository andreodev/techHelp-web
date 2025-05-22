// src/routes/RoutesIndex.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import RegisterView from '../View/RegisterView';
import HomeView from '../View/HomeView';
import Layout from '../components/Layout';
import TicketView from '../View/TicketView';

function RoutesIndex() {
  const location = useLocation();

  const pageNameMap: Record<string, string> = {
    '/': 'Página Inicial',
    '/register': 'Tela de Cadastro',
    '/new-ticket': 'Abertura de Chamada'
  };

  const pageName = pageNameMap[location.pathname] || 'Página';

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 },
  };

  return (
    <Layout pageName={pageName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          {...pageTransition}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/new-ticket" element={<TicketView />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default RoutesIndex;
