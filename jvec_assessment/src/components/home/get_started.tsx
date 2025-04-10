"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { topLeftGradient, curveGradient } from "@/assets";

export default function GetStarted() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full  relative flex items-center justify-center bg-gradient-to-br overflow-hidden bg-gradient-dark py-20">
      <motion.img
        src={topLeftGradient}
        alt=""
        className="absolute -bottom-40 left-0 w-xl"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl rounded-3xl bg-gradient-deep-blue p-8 md:p-12 overflow-hidden"
      >
        <motion.img
          src={curveGradient}
          alt=""
          className="absolute bottom-0  right-0 w-[270px] "
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to get started?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-gray-300 mb-2"
          >
            Shoot us a Mail
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-white mb-6 max-w-2xl"
          >
            Join numerous corporations, organizations, and businesses as they
            scale their teams, tap into new market opportunities and build
            innovative products with KeySystem Technology
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-white mb-10 max-w-2xl"
          >
            Join thousands of students who are ready to learn new skills or take
            their career to the next level by enrolling in one of our training
            programs today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="rounded-full bg-gradient-blue p-4 border-secondary shadow-sm shadow-primary text-white hover:bg-blue-600/30"
            >
              <motion.div
                initial={false}
                animate={{ x: isHovered ? 5 : 0 }}
                className="flex items-center"
              >
                <span>Send Us a Mail Now</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={false}
                  animate={{ x: isHovered ? 3 : 0, opacity: isHovered ? 1 : 0 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
