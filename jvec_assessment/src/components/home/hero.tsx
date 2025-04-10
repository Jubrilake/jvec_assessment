"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { topRightGradient, gridRadial } from "@/assets";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="relative lg:min-h-[100vh] md:min-h-[65vh] w-full flex flex-col justify-center overflow-hidden bg-gradient-dark-blue py-20">
      <motion.img
        src={topRightGradient}
        alt=""
        className="absolute blur-xl top-0 right-0 w-6xl"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.img
          src={gridRadial}
          alt=""
          className="absolute -top-80 -left-56 w-6xl opacity-25"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.img
          src={gridRadial}
          alt=""
          className="absolute -bottom-96 -right-72 w-7xl opacity-25 z-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.25, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="relative z-5"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="secondary"
              className="mb-6 bg-sky-700/60 p-3 text-sm rounded-full border-white border-2 text-white hover:bg-sky-700/80"
            >
              Welcome to KeySystem
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl mb-4 md:text-6xl lg:text-7xl font-bold text-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.3)]"
            variants={itemVariants}
          >
            IT Consulting for <br className="md:hidden" />
            <span className="block">Forward-thinking</span>
            <span className="block">Businesses</span>
          </motion.h1>

          <motion.p
            className="mb-10 max-w-2xl text-lg text-gray-200 md:text-xl"
            variants={itemVariants}
          >
            Driving Digital Transformation, One Solution at a Time
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            variants={itemVariants}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full bg-gradient-blue p-6 border-secondary shadow-sm shadow-primary text-white hover:bg-blue-600/30"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full border-gradient-blue p-6 shadow-sm shadow-primary text-white hover:border-gradient-blue/80"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
