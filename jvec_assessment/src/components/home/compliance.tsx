"use client";

import { Button } from "@/components/ui/button";
import ComplianceLogo from "./compliance_logo";
const Complaince = () => {
  return (
    <section className="w-full mx-auto px-4 py-28 bg-gradient-deep-blue">
      <div className="text-center mb-16">
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
        <ComplianceLogo />
      </div>
     
    </section>
  );
};

export default Complaince;
