// exports
const logger = require('./module')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')

// module.exports
const logger2 = require('./module2')
logger2('This is a main message')
logger2.verbose('This is a verbose message')

// Exporting a class
const Logger = require('./module3')
const dbLogger = new Logger('DB')
dbLogger.info('This is an informational message')
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')

// Exporting an instance
const logger4 = require('./module4')

logger4.log('This is an informational message')

const customLogger = new logger4.constructor('CUSTOM')
customLogger.log('This is an informational message')