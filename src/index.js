const axios = require("axios");
require("dotenv").config();
const { Command, flags } = require("@oclif/command");

let KEY = process.env.APPID;

class YwCliToolCommand extends Command {
  async run() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=san%20diego&appid=${KEY}&units=imperial`
      )
      .then(response => {
        var weatherInfo = {
          Temp: response.data.main.temp,
          Humidity: response.data.main.humidity,
          Wind_Speed: response.data.wind.speed,
          Wind_Degrees: response.data.wind.deg
        };
        this.log("Surfs Up. Here is your weather information", weatherInfo);
      });
  }
}

YwCliToolCommand.description = `Simple weather notification
...
Pulls weather request from the open weather database.
`;

YwCliToolCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
  name: flags.string({ char: "n", description: "name to print" })
};

module.exports = YwCliToolCommand;
