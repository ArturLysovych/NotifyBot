const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


const TOKEN = '5992776362:AAEDb0fIYtwHJHo1Mmk4LBQG70xtjA-rNgg';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    bot.sendMessage(1442775189, messageText);
})

app.post('/send-message', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Повідомлення не вказано' });
    }

    bot.sendMessage(1442775189, message)
        .then(() => {
            res.status('Повідомлення відправлено до бота');
        })
        .catch((error) => {
            console.error('Помилка при відправленні');
            res.status(500).json({ error: 'Помилка при відправленні повідомлення' })
        })
})


app.listen(PORT, () => {
    console.log(`Server work on PORT: ${PORT}`);
})

