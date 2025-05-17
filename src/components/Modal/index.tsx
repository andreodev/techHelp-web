import { AnimatePresence, motion } from "framer-motion";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  description: string;
  title: string;
}

export default function Modal({ isOpen, setOpen, title, description }: IModal) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-md z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <button
              onClick={() => setOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
            >
              Fechar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
