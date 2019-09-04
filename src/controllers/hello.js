const { format } = require('date-fns');
const now = new Date();

module.exports = {
  message: `Hello World!`,
  today: format(now, "'Today is a' iiii"),
  date: format(now, 'MM/dd/yyyy'),
  timer: format(now, 'hh:mm:ss')
}