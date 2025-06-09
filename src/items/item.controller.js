const Item = require('./item.model');

// Добавление товара
const postAItem = async (req, res) => {
    try {
        const { img, images, description, category, title, alt } = req.body;
        const newItem = new Item({ img, images, description, category, title, alt });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Ошибка при добавлении товара:", error);
        res.status(500).json({ message: "Ошибка при добавлении товара", error: error.message });
    }
};

// Получить все товары
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 }); // Сортировка по дате создания, от новых к старым
        res.status(200).send(items)
    } catch (error) {
        res.status(500).json({ message: "Ошибка при получении товаров", error });
    }
};

module.exports = { postAItem, getAllItems };
