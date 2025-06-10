import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import RegisterView from '../View/RegisterView';
import HomeView from '../View/HomeView';
import Layout from '../components/Layout';
import TicketView from '../View/TicketView';
import LoginPage from '@/View/AboutView';

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

  const isLoginPage = location.pathname === '/login';

  return (
    <> 
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          {...pageTransition}
        >
          {isLoginPage ? (
            <Routes location={location} key={location.pathname}>
              <Route path="/login" element={<LoginPage />} /> 
            </Routes>
          ) : (
            <Layout pageName={pageName}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="/new-ticket" element={<TicketView />} />
              </Routes>
            </Layout>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default RoutesIndex;