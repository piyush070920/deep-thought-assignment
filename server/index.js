const express = require("express");
const https = require("https");
const app = express();
const axios = require("axios");
const PORT = 4000;
const URL =
  "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

app.get("/", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // Allow froneend origins
  try {
    const response = await axios.get(URL, { httpsAgent });

    res.json(response.data);
  } catch (error) {
    console.log("Failed to fetch data");
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
