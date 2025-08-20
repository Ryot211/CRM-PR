# Shopify → CRM Integration

This project connects Shopify with a simple CRM using **Node.js** and **SQLite**.  
Whenever a customer places an order in Shopify, the data is sent via a **Webhook** to the server and stored in the CRM database.

---

## ⚡ Features
- **Receive Orders in Real-Time**: Shopify Webhook (`orders/create`) sends order data in JSON.
- **Store Orders in CRM**: Customer name, email, order ID, and total saved in SQLite.
- **Test Easily**: Works locally using **ngrok** to expose your server.

---

## 🚀 How to Test
1. Start server:  
```bash
node server.js
