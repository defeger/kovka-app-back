const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

require('dotenv').config()

//middlewares
app.use(express.json());
app.use(cors({
  origin: ["defeger-kovka-app-front-023f.twc1.net"], // разрешить фронт на Vite
  credentials: true
}));

// Раздача папки media как статической (доступно по /media/имя_файла)
app.use('/media', express.static('media'));

//руты
const itemRoutes = require('./src/items/item.route');
app.use("/api/items", itemRoutes);
const orderRoutes = require('./src/orders/order.route');
app.use("/api/orders", orderRoutes);
const feedbackRoutes = require('./src/feedback/feedback.route');
app.use("/api/feedback", feedbackRoutes);

// healthcheck
app.get("/", (req, res) => {
  res.send("Running");
});

async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB connected");
}

main()
  .then(() => {
    app.listen(port, () => {
      console.log(`PORT = ${port}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
