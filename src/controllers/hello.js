const { format } = require('date-fns');

module.exports.get = (_, res) => {
  const now = new Date();
  return res.status(200).json({
    message: `Hello World!`,
    today: format(now, "'Today is a' iiii"),
    date: format(now, 'MM/dd/yyyy'),
    timer: format(now, 'hh:mm:ss')
  });
}