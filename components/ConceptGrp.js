import { motion } from "framer-motion";

const ConceptGrp = ({ children }) => (
  <motion.div
    entry={{
      scale: 0,
      opacity: 0,
      x: -10
    }}
    animate={{
      scale: 1,
      opacity: 1,
      x: 0
    }}
    exit={{ scale: 0, opacity: 0, x: 100 }}
    className="relative pt-16 pb-8 px-8 rounded-xl bg-gray-800 text-white text-opacity-90 shadow-2xl"
    layout
  >
    {children}
  </motion.div>
);

export default ConceptGrp;
