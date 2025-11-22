import { motion, AnimatePresence } from 'framer-motion';
import { AlertModalProps } from '../../../types/modal';

export default function AlertModal({ message }: AlertModalProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ top: 50, opacity: 0 }}
          animate={{ top: 40, opacity: 1 }}
          exit={{ top: 30, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed left-1/2 -translate-x-1/2 px-5 py-2.5 bg-lime-800 text-gray-100 rounded-md"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
