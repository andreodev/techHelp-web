import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface IModalLoading {
  isOpen: boolean;
}

export default function LoadingModal({ isOpen }: IModalLoading) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-[#0000008e]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-full max-w-sm text-center flex flex-col items-center shadow-lg"
          >
            <Loader2 className="animate-spin text-blue-600" size={40} />
            <p className="mt-4 text-gray-700 font-medium">Registrando usuário...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
