const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./crm.db");

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS orders (id TEXT, customer TEXT, email TEXT, total TEXT)");
});

function saveOrder(order) {
    db.run(
        "INSERT INTO orders (id, customer, email, total) VALUES (?, ?, ?, ?)",
        [
            order.id,
            order.customer?.first_name + " " + order.customer?.last_name,
            order.email,
            order.total_price
        ]
    );
}

module.exports = { saveOrder };
