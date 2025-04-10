"use client";

import { Link } from "react-router";

import { motion } from "framer-motion";
import { footerData } from "@/data/footer";
import { logo } from "@/assets";

export default function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  // Split services into two columns
  const firstHalfServices = footerData.services.slice(0, 6);
  const secondHalfServices = footerData.services.slice(6);

  // Render social media icons
  const renderSocialMedia = () => {
    return (
      <motion.div
        variants={containerVariants}
        className="flex space-x-6 items-center"
      >
        {footerData.socialMedia.map((social, index) => {
          return (
            <motion.a
              key={`social-${index}`}
              href={social.href}
              variants={socialVariants}
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <img src={social.icon} className="w-[80%]" alt={social.name} />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          );
        })}
      </motion.div>
    );
  };

  // Render contact grid item
  const renderContactItem = (
    item:
      | { title: string; value: string; isEmail?: undefined; empty?: undefined }
      | { title: string; value: string; isEmail: boolean; empty?: undefined }
      | {
          empty: boolean;
          title?: undefined;
          value?: undefined;
          isEmail?: undefined;
        },
    index: string
  ) => {
    if (item.empty)
      return <div key={`empty-${index}`} className="col-span-1"></div>;

    return (
      <motion.div
        key={`contact-${index}`}
        variants={itemVariants}
        className="col-span-1"
      >
        <h4 className="font-medium mb-2">{item.title}</h4>
        <p className="text-base">
          {item.isEmail ? (
            <a
              href={`mailto:${item.value}`}
              className="hover:text-blue-400 transition-colors"
            >
              {item.value}
            </a>
          ) : (
            <>Tel: {item.value}</>
          )}
        </p>
      </motion.div>
    );
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-gradient-dark text-gray-300 py-12 relative"
    >
      <div className="mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <motion.div variants={itemVariants} className="">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center">
                <div className="relative">
                  <img src={logo} alt="KeySystem Logo" className="w-full" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                © {new Date().getFullYear()} KeySystem Technology Limited. All
                rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Services - First Column */}
          <motion.div variants={itemVariants} className="">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              SERVICES
            </h3>
            <ul className="space-y-2 text-sm">
              {firstHalfServices.map((service, index) => (
                <li key={`service-1-${index}`}>
                  <Link to="#" className="hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services - Second Column */}
          <motion.div variants={itemVariants} className="">
            <ul className="space-y-2 text-sm mt-10 md:mt-10">
              {secondHalfServices.map((service, index) => (
                <li key={`service-2-${index}`}>
                  <Link to="#" className="hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              {footerData.quickLinks.map((link, index) => (
                <li key={`quick-link-${index}`}>
                  <Link
                    to={link.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Nigeria */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">
                  {footerData.locations[0].name}
                </h4>
                <p className="text-sm text-gray-400">
                  {footerData.locations[0].address.map((line, index) => (
                    <span key={`address-ng-${index}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact - United Kingdom */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6 mt-6 md:mt-10">
              <div>
                <h4 className="font-medium mb-2">
                  {footerData.locations[1].name}
                </h4>
                <p className="text-sm text-gray-400">
                  {footerData.locations[1].address.map((line, index) => (
                    <span key={`address-uk-${index}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </motion.div>

       
        </div>
        <div className="md:grid-cols-3 grid-cols-1 gap-0 mt-12 grid">
          {/* Social Media */}
          <div className="mt-12 flex items-end ">{renderSocialMedia()}</div>
          {/* Contact Grid - First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 col-span-2 gap-8 mt-12">
            {footerData.contactGrid.row1.map((item, index) =>
              renderContactItem(item, `row1-${index}`)
            )}
            {footerData.contactGrid.row2.map((item, index) =>
              renderContactItem(item, `row2-${index}`)
            )}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
