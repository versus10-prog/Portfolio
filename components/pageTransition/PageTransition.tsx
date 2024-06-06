"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={"modal"}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            translateX: -100,
            opacity: 0,
          },
          pageAnimate: {
            translateX: 0,
            opacity: 1,
            transition: { delay: 0.2 },
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
