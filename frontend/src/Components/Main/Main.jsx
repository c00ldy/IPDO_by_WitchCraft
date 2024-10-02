import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Features from "../Features/Features";

const Main = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipDetails, setIpDetails] = useState(null);
  const [lookupTriggered, setLookupTriggered] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading animation
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (!ipAddress) {
        setIpDetails(null);
        return;
      }

      setLoading(true); // Start loading animation

      try {
        const response = await fetch(
          `http://localhost:3000/api/shodan/${ipAddress}`
        );
        const data = await response.json();

        if (response.ok) {
          setIpDetails(data);
        } else {
          alert(data.error || "No details found for the entered IP address.");
          setIpDetails(null);
        }
      } catch (error) {
        console.error("Error fetching IP details:", error.message);
        alert("An error occurred while fetching the IP details.");
        setIpDetails(null);
      } finally {
        setLoading(false); // Stop loading animation
      }
    };

    if (lookupTriggered) {
      fetchData();
      setLookupTriggered(false);
    }
  }, [lookupTriggered, ipAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ipAddress.trim()) {
      setError("Please enter an IP address.");
      return;
    }

    setError("");
    setIpAddress(ipAddress.trim());
    setLookupTriggered(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#010b18] text-[#a1caff]">
      <div className="space-y-2 text-center">
        <motion.h1
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mt-20 py-7"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unveil the Secrets of IP Addresses
        </motion.h1>
        <motion.p
          className="mx-auto max-w-[700px] text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Discover vulnerabilities, open ports, and crucial information about
          any IP address. Enhance your threat intelligence with WitchCraft.
        </motion.p>
      </div>

      <form onSubmit={handleSubmit} className="flex space-x-4 mb-8 mt-7">
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder="Enter your IP address"
          className="px-4 w-60 py-2 border border-blue-500 rounded bg-[#010b18] text-[#a1caff] focus:outline-none"
        />
        <motion.button
          type="submit"
          className="px-6 py-2   text-[white] bg-blue-600 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? (
            <motion.div
              className="loader"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
            </motion.div>
          ) : (
            "Look Up"
          )}
        </motion.button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {ipDetails && (
          <>
            <motion.div
              className="bg-[#0d1b2a] p-6 rounded shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold mb-4">Basic Information</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-semibold">IP Address:</p>
                  <p>{ipDetails?.Ip || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">ISP:</p>
                  <p>{ipDetails?.isp || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Organization:</p>
                  <p>{ipDetails?.Organization || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Domains:</p>
                  <p>{ipDetails?.domains || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">ASN:</p>
                  <p>{ipDetails?.ASN || "N/A"}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0d1b2a] p-6 rounded shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-semibold">City:</p>
                  <p>{ipDetails?.city || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Region:</p>
                  <p>{ipDetails?.region || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Country Name:</p>
                  <p>{ipDetails?.country_name || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Longitude:</p>
                  <p>{ipDetails?.longitude || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Latitude:</p>
                  <p>{ipDetails?.latitude || "N/A"}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0d1b2a] p-6 rounded shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">Cloud Information</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-semibold">Region:</p>
                  <p>{ipDetails?.region || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Service:</p>
                  <p>{ipDetails?.service || "N/A"}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">Provider:</p>
                  <p>{ipDetails?.provider || "N/A"}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0d1b2a] p-6 rounded shadow-lg col-span-1 md:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold mb-4">Open Ports</h2>
              <div className="space-y-2">
                <p>
                  {ipDetails?.openPorts?.length > 0
                    ? ipDetails.openPorts.join(", ")
                    : "N/A"}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0d1b2a] p-6 rounded shadow-lg col-span-2 md:col-span-2 lg:col-span-3 mb-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-4">Passive Vulnerabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.isArray(ipDetails.PassiveVulnerability) &&
                ipDetails.PassiveVulnerability.length > 0 ? (
                  ipDetails.PassiveVulnerability.map(
                    (vulnerability, index) => (
                      <div key={index} className="p-2">
                        <p className="text-[#a1caff]">{vulnerability}</p>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-gray-400">
                    No passive vulnerabilities found.
                  </p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </div>

      {!ipDetails && <Features />}
    </div>
  );
};

export default Main;
