const winston = require('winston');
const options = require('../../config/winston');

const init = () => {
  winston.addColors(options.colors);
  const myformat = winston.format.combine(
    winston.format(info => {
      info.level = info.level.toUpperCase()
      return info;
    })(),
    winston.format.colorize({ all: true, }),
    winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    winston.format.align(),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  );
  
  return winston.createLogger({
    levels: options.levels,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.Console({
        format: myformat,
      }),
      new winston.transports.File({
        filename: './public/combined.log'
      }),
    ],
  });
};

module.exports = init;
