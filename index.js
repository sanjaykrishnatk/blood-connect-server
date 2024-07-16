const express = require("express");
const jsonServer = require("json-server");
const axios = require("axios");

const bloodConnectServer = jsonServer.create();
const middleware = jsonServer.defaults();
const router = jsonServer.router("db.json");

bloodConnectServer.use(middleware);
bloodConnectServer.use(express.json());

bloodConnectServer.post("/api/sms", async (req, res) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://www.fast2sms.com/dev/bulkV2",
      data: req.body,
      headers: {
        authorization:
          "wB2U60QDGRgbP5HW7qdTpZi9rezOMk4nFELucxJX1hCfvYKVlA6ELlu5kNHj824B9zDpsI7RwrCGofbd",
        "Content-Type": "application/json",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ error: error.message });
  }
});

bloodConnectServer.use(router);

const PORT = process.env.PORT || 3000;
bloodConnectServer.listen(PORT, () => {
  console.log(`Server running successfully at port number ${PORT}`);
});
