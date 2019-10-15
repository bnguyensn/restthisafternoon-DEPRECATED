const chalk = require('chalk');

function getTime() {
  return new Date(Date.now()).toString();
}

function createText(text) {
  return getTime() + ': ' + text;
}

function info(text) {
  console.log(chalk.blue(createText(text)));
}

function success(text) {
  console.log(chalk.green(createText(text)));
}

function warn(text) {
  console.log(chalk.yellow(createText(text)));
}

function error(text) {
  console.log(chalk.red(createText(text)));
}

module.exports = {
  info,
  success,
  warn,
  error,
};
