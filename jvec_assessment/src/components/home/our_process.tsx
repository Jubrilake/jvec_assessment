"use client";

import { motion } from "framer-motion";

import { puzzle, handShake, delivery } from "@/assets";

export default function OurProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="w-full mx-auto p-8 bg-gradient-dark text-white "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-12 pb-6 " variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold mb-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            Our Process
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            At KeySystem, we leave you with a lasting impression
          </motion.p>
        </motion.div>

        {/* Strategic Consultation */}
        <motion.div
          className="p-10 w-full mb-10 bg-gardient-dark-shade rounded-lg relative overflow-hidden"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="pr-36"
          >
            <h3 className="lg:text-4xl text-lg font-bold mb-4">
              Strategic Consultation
            </h3>
            <p className="mb-12">
              We kick off with a strategic consultation to understand your
              brand, goals, and audience
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, type: "spring" }}
          >
            <img
              src={puzzle}
              alt="Handshake"
              className=" w-[20%] absolute bottom-0 right-0"
            />
          </motion.div>
        </motion.div>

        {/* Collaboration and Delivery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          {/* Collaboration */}
          <motion.div
            className="p-10 bg-gardient-dark-shade rounded-lg relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="pr-36"
            >
              <h3 className="lg:text-4xl text-lg font-bold mb-4">
                Collaboration
              </h3>
              <p className="mb-12">
                At KeySystem, we collaborate closely to ensure the end result
                meets your expectations and makes you happy
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
            >
              <img
                src={handShake}
                alt="Handshake"
                className=" w-[35%] absolute bottom-0 right-0"
              />
            </motion.div>
          </motion.div>

          {/* Delivery */}
          <motion.div
            className="p-10 bg-gardient-dark-shade rounded-lg relative overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="pr-36"
            >
              <h3 className="lg:text-4xl text-lg font-bold mb-4">Delivery</h3>
              <p className="mb-12">
                Our delivery rate is 100%; our clients deserve nothing less.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, type: "spring" }}
            >
              <img
                src={delivery}
                alt="Handshake"
                className=" w-[35%] absolute bottom-0 right-0"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
