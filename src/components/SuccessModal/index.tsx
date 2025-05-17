import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-6 w-full max-w-sm text-center shadow-lg"
          >
            <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
            <h2 className="text-lg font-semibold">{message}</h2>
            <button
              onClick={onClose}
              className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
