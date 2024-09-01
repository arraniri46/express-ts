import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'

export const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`
        }),
    ),
    transports: [
        new transports.DailyRotateFile({
            filename: 'log/app-%DATE%.log',
            zippedArchive: true,
            maxSize: '2m',
            maxFiles: '14d',
        }),
        new transports.File({
            filename: 'log/exceptions.log',
            handleExceptions: true,
        }),
        new transports.File({
            filename: 'log/rejections.log',
            handleRejections: true,
        }),
    ],
})
