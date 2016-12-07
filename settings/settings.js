var Settings = {
    port: process.env.PORT || 3333,
    serverResponse: "***\nСТАТУС СЕРВЕРА: OK. ПОРТ: ",
    MOTD: "\nMessage of the day goes here",
    secret: "i am gonna hash my strings up"
};

module.exports = Settings;