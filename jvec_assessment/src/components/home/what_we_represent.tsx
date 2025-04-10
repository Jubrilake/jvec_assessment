"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { visionIcon, magnifyGlass, topRightGradient } from "@/assets";
import { motion } from "framer-motion";

export default function WhatWeRepresent() {
  return (
    <div className="bg-gradient-dark text-white py-28 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">What we Represent</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our relentless pursuit of excellence is the driving force behind our
            success
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-300">
            Excellence isn't a goal, it's our DNA; our relentless pursuit of
            excellence is the driving force behind our success. Excellence is
            our legacy, and we are proud to carry it forward. Watch the video to
            see how we are innovating to keep businesses on top of their games.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: visionIcon,
              title: "Our Vision",
              text: "To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth.",
            },
            {
              icon: magnifyGlass,
              title: "Our Mission",
              text: "We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="relative rounded-lg p-[1px] overflow-hidden"
              style={{
                background: `linear-gradient(to right top, rgba(201, 201, 201, 0) 20%,rgba(1, 180, 222, 1) 40%,rgba(1, 180, 222, 1) 60%, rgba(214, 214, 214, 0) 100%)`,
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 * index }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-dark border-none text-white relative overflow-hidden rounded-lg h-full">
                <img
                  src={topRightGradient}
                  className="absolute z-2 top-0 right-0 w-lg"
                  alt=""
                />
                <CardContent className="p-8 z-3 flex flex-col space-y-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={`object-contain mx-auto ${
                      item.title === "Our Vision" ? "w-[450px]" : "w-[360px]"
                    }`}
                  />

                  <CardTitle className="text-3xl font-bold mb-4">
                    {item.title}
                  </CardTitle>
                  <p className="text-gray-300 pr-8">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
