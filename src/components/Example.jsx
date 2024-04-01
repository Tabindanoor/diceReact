import { motion } from "framer-motion";

const Example = () => {
  return (
    <div className="grid place-content-center bg-black px-4 h-screen w-screen opacity-75 scroll-smooth transition-opacity">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren:  0.2,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-green-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-red-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-yellow-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-pink-500" />  
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-blue-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-purple-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-zinc-500" />
      <motion.div variants={variants} className="h-12 w-2 bg-orange-500" />
    </motion.div>
  );
};

export default Example;

