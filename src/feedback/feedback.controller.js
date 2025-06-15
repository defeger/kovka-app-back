const Feedback = require('./feedback.model');

const postFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !message) {
            return res.status(400).json({ message: "Имя и сообщение обязательны" });
        }
        const feedback = new Feedback({ name, email, message });
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: "Ошибка при отправке обратной связи", error: error.message });
    }
};

module.exports = { postFeedback };
