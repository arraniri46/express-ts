import { PrismaClient } from '@prisma/client'
import { logger } from './logging'

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'info',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ],
})

prismaClient.$on('error', (e: string) => {
  logger.error(e)
})

prismaClient.$on('warn', (e: string) => {
  logger.warn(e)
})

prismaClient.$on('info', (e: string) => {
  logger.info(e)
})

prismaClient.$on('query', (e: string) => {
  logger.info(e)
})
