const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Serviço de Pedidos");
});

app.get("/pedidos", (req, res) => {
  res.json([
    {
      id: 1,
      produto: "Notebook",
      quantidade: 2
    }
  ]);
});

app.listen(3000, () => {
  console.log("Pedidos rodando");
});
