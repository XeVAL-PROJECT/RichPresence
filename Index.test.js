const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var config = fs.readFileSync("config.js", "utf8");
const token = "ваш_токен";
//const token = config.token;
const sstatus = config.sstatus;
const name = config.name;
const state = config.state;
const details = config.details;
const application_id = config.application_id;
const spectateSecret = config.spectateSecret;
const small_image = config.small_image;
const small_text = config.small_text;
const large_image = config.large_image;
const large_text = config.large_text;
//const start = config.start; //Уберите в начале строки // и заменяете start: Date.now() на start: start ниже
//const end = config.end;
const id = config.id;
//const size = config.size;
//const size = [8,8];
const match = config.match;
const join = config.join;
const spectate = config.spectate;

client.on('ready', () => {
    console.log("Успешный запуск RichPresence, ожидание установки статуса...");
    client.user.setPresence({
      status: sstatus, //статус вашего аккаунта (dnd, idle, invisible, online)
      game: {
        name: name, //название вашей игры
        state: state, //текст на 2 линии
        details: details, //текст на 1 линии
        application_id: application_id, //приложение в котором содержатся все ассесты
        spectateSecret: spectateSecret, //секрет для наблюдения
assets: { 
          small_image: small_image, //id от маленько ассеста
          small_text: small_text, //текст который будет виден при наведение на маленький ассест
          large_image: large_image, //id от большого ассеста
          large_text: large_text //текст который будет виден при наведение на большой ассест
        },
        timestamps: { //метки времени
          start: Date.now() //, // устанавливает дату запуска как метку для timestamp (то есть время начнется с [прошло 00:00])
          //end: end
        }, // поменяйте на end и замените Date.now() если хотите произвольную дату, указывать нужно в unix => https://www.unixtimestamp.com/
        party: {
        id: id, // ид пати
        size: [8,8] //размер виртуального пати, вы можете хоть его переполнить
        },
        secrets: { //это секреты для пати, вход и просмотр игры, однако я так и не смог их настроить...
        match: match, //матч
        join: join, //секрет входа
        spectate: spectate // секрет наблюдения
        }
      }
    });
    console.log("Успех, статус установлен");
});
if(token) {
  client.login(token).catch(e=> console.log(e))
  } else {
  client.login(process.env.TOKEN)
  }
