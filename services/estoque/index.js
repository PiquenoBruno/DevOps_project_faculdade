const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de Estoque");
});

app.get("/estoque", (req, res) => {
  res.json([
    {
      id: 1,
      produto: "Notebook",
      quantidade: 15
    }
  ]);
});

app.listen(3000, () => {
  console.log("Estoque rodando");
});