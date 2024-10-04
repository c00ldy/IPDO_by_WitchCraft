import React from 'react';
import { motion } from 'framer-motion';

const Feature = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="bg-[#0d1b2a] text-[#a1caff] p-6 rounded-lg shadow-md flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }} 
    >
      <div className="text-4xl mb-4 text-blue-text">{icon}</div>
      <h3 className="font-semibold text-lg text-blue-text">{title}</h3>
      <p className="text-gray-text mt-2">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const featureData = [
    {
      icon: '👤', 
      title: 'Open Ports',
      description: 'Identify open ports and potential vulnerabilities',
    },
    {
      icon: '🛡️',
      title: 'CVE Vulnerabilities',
      description: 'Detect known vulnerabilities associated with the IP',
    },
    {
      icon: '🌍',
      title: 'Geolocation',
      description: 'Pinpoint the physical location of the IP address',
    },
    {
      icon: '☁️',
      title: 'Cloud Information',
      description: 'Identify cloud provider and region details',
    },
  ];

  return (
    <div className="bg-dark-bg py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20">
        {featureData.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
