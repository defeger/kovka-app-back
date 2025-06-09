const Order = require('./order.model');

const postOrder = async (req, res) => {
    try {
        console.log('POST /api/orders body:', req.body); // Для отладки
        const { name, phone, type, description } = req.body;
        if (!name || !phone || !type) {
            return res.status(400).json({ message: "Все обязательные поля должны быть заполнены" });
        }
        const order = new Order({ name, phone, type, description });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.error("Ошибка при сохранении заявки:", error); // Для отладки
        res.status(500).json({ message: "Ошибка при сохранении заявки", error: error.message });
    }
};

module.exports = { postOrder };
