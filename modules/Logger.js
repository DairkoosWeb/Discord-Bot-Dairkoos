const chalk = require("chalk");
const moment = require("moment");

 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

exports.log = (content, type = "log") => {
  const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
  switch (type) {
    case "log": {
      return console.log(
        `${timestamp} ${chalk.bgBlue(type.toUpperCase())} ${content} `
      );
      }

           // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    case "warn": {
      return console.log(
        `${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `
      );
      }

           // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    case "error": {
      return console.log(
        `${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `
      );
      }

           // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    case "debug": {
      return console.log(
        `${timestamp} ${chalk.green(type.toUpperCase())} ${content} `
      );
      }

           // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    case "cmd": {
      return console.log(
        `${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`
      );
      }

           // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73
    case "ready": {
      return console.log(
        `${timestamp} ${chalk.black.bgGreen(type.toUpperCase())} ${content}`
      );
      }

           // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73


    default:
      throw new TypeError(
        "Le type de journal doit être soit avertir, déboguer, journaliser, prêt, cmd ou erreur."
      );
  }
};


 // create by Dairkoos credit me or gay join here for help https://discord.gg/avZvP7gc73

exports.error = (...args) => this.log(...args, "error");

exports.warn = (...args) => this.log(...args, "warn");

exports.debug = (...args) => this.log(...args, "debug");

exports.cmd = (...args) => this.log(...args, "cmd");
