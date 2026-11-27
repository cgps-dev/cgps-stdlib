import pino from "pino";

const logger = pino({
  level: process.env.LOGGER_LEVEL ?? "silent",
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
