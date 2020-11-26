'use strict';

const chalk = require(`chalk`);

module.exports = {
  name: `--help`,
  run() {
    const text = `
    Program launches the http-server.

    Guide:
    service.js [command]

    Commands:
    --version:            output the number of version
    --help:               output this text
    --server [port]       launch the server on the specified or default port
    `;

    console.log(chalk.grey(text));
  }
};
