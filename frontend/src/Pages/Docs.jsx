import React from "react";
import { motion } from "framer-motion";

const Docs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger children
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#010b18] text-[#a1caff] p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IPDO API Documentation
        </motion.h1>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              Our IP Information Service allows you to gather detailed insights on IP addresses, 
              including basic information, geolocation, cloud provider details, open ports, and 
              passive vulnerabilities. We leverage the Shodan API to provide robust data for each query.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Base Endpoint</h2>
            <p>
              <code className="bg-[#2a2a2a] p-2 rounded">
                GET https://api.shodan.io/shodan/host/{"{IP}"}?key=YOUR_API_KEY
              </code>
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li><strong>{`{IP}`}:</strong> The target IP address.</li>
              <li><strong>YOUR_API_KEY:</strong> Your Shodan API key.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Basic Information:</strong> Retrieves essential details about the IP address, including ISP and hostnames.</li>
              <li><strong>Location:</strong> Provides geolocation data for the IP, including city, country, and GPS coordinates.</li>
              <li><strong>Cloud Information:</strong> Checks if the IP belongs to a cloud provider and returns relevant details.</li>
              <li><strong>Open Ports:</strong> Lists open ports and services running on the IP, including their banner data.</li>
              <li><strong>Passive Vulnerabilities:</strong> Detects known vulnerabilities based on the IP's open ports and services.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
            <p>
              Before making requests, ensure you have your API key from Shodan. You can get this key 
              by signing up for a Shodan account and accessing your API keys in the dashboard.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Response Fields</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>IP:</strong> The target IP address.</li>
              <li><strong>hostnames:</strong> Associated hostnames for the IP.</li>
              <li><strong>city:</strong> Geolocation city of the IP.</li>
              <li><strong>country:</strong> Country of the IP.</li>
              <li><strong>ports:</strong> List of open ports on the IP.</li>
              <li><strong>vulnerabilities:</strong> List of passive vulnerabilities detected based on services.</li>
              <li><strong>cloud:</strong> Cloud provider details, if applicable.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
            <p>
              Your API usage is subject to rate limits as defined by Shodan. Check your Shodan account 
              to understand the rate limits and upgrade options for higher limits.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>400 Bad Request:</strong> Invalid IP address or missing parameters.</li>
              <li><strong>401 Unauthorized:</strong> Invalid or missing API key.</li>
              <li><strong>403 Forbidden:</strong> Your API key doesn’t have access to this endpoint.</li>
              <li><strong>429 Too Many Requests:</strong> Rate limit exceeded.</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <p>
              For further assistance, visit our Support Page or contact us via email at{" "}
              <a href="mailto:support@yourcompany.com" className="underline text-[#80b3ff]">
                support@ipdo.com
              </a>.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Docs;
