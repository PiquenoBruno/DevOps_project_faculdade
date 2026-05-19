const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("API Gateway");
});

app.get("/pedidos", async (req, res) => {
  const response = await axios.get(
    "http://pedidos:3000/pedidos"
  );

  res.json(response.data);
});

app.get("/pagamentos", async (req, res) => {
  const response = await axios.get(
    "http://pagamentos:3000/pagamentos"
  );

  res.json(response.data);
});

app.get("/estoque", async (req, res) => {
  const response = await axios.get(
    "http://estoque:3000/estoque"
  );

  res.json(response.data);
});

app.listen(3000, () => {
  console.log("Gateway rodando");
});
