import 'dotenv/config';
import express from "express";
import cors from "cors";
import axios from 'axios';
import userRouter from "./routes/userRoute.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 3000;

const SHODAN_API_URL = "https://api.shodan.io/shodan/host";
const API_KEY = process.env.SHODAN_API_KEY;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);

connectDB();

const formatShodanData = (main_data) => {
  return {
    Ip: main_data?.ip_str || "N/A",
    isp: main_data?.isp || "N/A",  
    Organization: main_data?.org || "N/A",
    ASN: main_data?.asn || "N/A",  

    domains: (main_data?.data && main_data.data[0]?.domains?.[0]) || "N/A",

    city: main_data?.data?.[0]?.location?.city || "N/A",
    region: main_data?.data?.[0]?.location?.region_code || "N/A",
    country_name: main_data?.data?.[0]?.location?.country_name || "N/A",
    longitude: main_data?.data?.[0]?.location?.longitude || "N/A",
    latitude: main_data?.data?.[0]?.location?.latitude || "N/A",

    service: main_data?.data?.[0]?.cloud?.service || "N/A",
    provider: main_data?.data?.[0]?.cloud?.provider || "N/A",

    openPorts: main_data?.ports || [],  

    PassiveVulnerability: main_data?.vulns || "N/A", 
  };
};

app.get("/api/shodan/:ip?", async (req, res) => {
  const ip = req.params.ip;

  if (!ip) {
    return res.status(400).json({ error: "IP address is required" });
  }

  try {
    const response = await axios.get(`${SHODAN_API_URL}/${ip}?key=${API_KEY}`);
    if (response.data) {
      const formattedData = formatShodanData(response.data);
      return res.json(formattedData);
    } else {
      return res.status(404).json({ error: "No data found for the provided IP address" });
    }
  } catch (error) {
    console.error("Error fetching data from Shodan API:", error.message);
    return res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || "Failed to retrieve data from Shodan API",
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err.message);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});
