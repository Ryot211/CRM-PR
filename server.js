const express = require("express");
const bodyParser = require("body-parser");
const { saveOrder } = require("./crm");

const app = express();
app.use(bodyParser.json());

app.post("/webhook/orders", (req, res) => {
    const order = req.body;

    console.log("🛒 Pedido recibido:");
    console.log("ID:", order.id);
    console.log("Cliente:", order.customer?.first_name, order.customer?.last_name);
    console.log("Email:", order.email);
    console.log("Total:", order.total_price);

    // Guardar en CRM
    saveOrder(order);

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
