import { createLogger, transports, format } from "winston";

const customFormat = format.combine(format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}), format.printf((info) => {
    return `${info.timestamp} - [${info.level.toUpperCase()}] - ${info.message} `
}))

const logConfiguration = {
    format: customFormat,
    'transports': [
        new transports.Console(), // printing all the logs on console
        new transports.File({ filename: 'logs/app.log' })
    ]
};
export const logger = createLogger(logConfiguration)
