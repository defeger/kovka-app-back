const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config()

//middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5000"], // разрешить фронт на Vite
  credentials: true
}));

// Раздача папки media как статической (доступно по /media/имя_файла)
app.use('/media', express.static('media'));

//руты
const itemRoutes = require('./src/items/item.route');
app.use("/api/items", itemRoutes);
const orderRoutes = require('./src/orders/order.route');
app.use("/api/orders", orderRoutes);

// healthcheck
app.get("/", (req, res) => {
  res.send("Running");
});

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main().then(() => console.log("Mongodb connect success!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
