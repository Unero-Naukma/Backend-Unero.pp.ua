'use strict';

const help = require(`./help`);
const version = require(`./version`);
const server = require(`./server`);

const Cli = {
  [help.name]: help,
  [version.name]: version,
  [server.name]: server
};

module.exports = {
  Cli,
};
