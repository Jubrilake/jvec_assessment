"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Complaince = () => {
  return (
    <section className="w-full mx-auto px-4 py-9 bg-gradient-deep-blue">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold leading-16 text-white mb-6">
          Compliance Certifications/ <br />
          Standards We Specialize In
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-6 text-center">
          Elevate Your Organization's Security Posture with Our
          Compliance/Standards Consulting Services
        </p>
        <Button
          variant="outline"
          size="lg"
          className="rounded-full bg-gradient-blue p-6 border-secondary shadow-sm shadow-primary text-white hover:bg-blue-600/30"
        >
          Contact Us
        </Button>
      </motion.div>
    </section>
  );
};

export default Complaince;
