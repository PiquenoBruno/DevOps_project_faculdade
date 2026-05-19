const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de Pagamentos");
});

app.get("/pagamentos", (req, res) => {
  res.json([
    {
      id: 1,
      status: "Pago",
      valor: 5000
    }
  ]);
});

app.listen(3000, () => {
  console.log("Pagamentos rodando");
});