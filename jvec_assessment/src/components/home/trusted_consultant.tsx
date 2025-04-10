"use client";

import { motion } from "framer-motion";
import { bgPattern } from "@/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const TrustedConsulted = () => {
  return (
    <section className="w-full pt-16 pb-3 bg-gradient-dark text-white relative overflow-hidden">
      <div className="container mx-auto">
        <motion.img
          src={bgPattern}
          className="absolute opacity-50 top-0 left-0 w-full h-full"
          alt="pattern"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="bg-gradient-blue-radial z-1 absolute blur-3xl bottom-0 opacity-60 left-0 right-0 w-full h-[70%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="max-w-5xl relative z-3 mx-auto text-center py-8">
          <motion.h1
            className="text-5xl font-bold mb-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Why we are your Trusted Consultant
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Empowering Businesses with Cutting-edge Technology
          </motion.p>

          <motion.p
            className="text-2xl bg-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.3)] bg-clip-text text-transparent mb-12 leading-relaxed px-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Excellence isn't a goal, it's our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward.
          </motion.p>

          <motion.p
            className="text-gray-300 mb-6 text-xl flex items-center justify-center gap-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            Watch the video to see how we are innovating to keep businesses on
            top of their games.
          </motion.p>

          <motion.div
            className="rounded-xl overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <img
              src="/consultant.png"
              alt="Business team collaborating in a modern office"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedConsulted;
