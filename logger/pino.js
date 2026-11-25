import pino from "pino";
import pretty from "pino-pretty";

let destination;

if (process.env.LOGGER_TARGET === "file") {
  destination = pino.destination({
    dest: process.env.LOGGER_TARGET_FILE ?? "pw-local.log",
    sync: true,
  });
}

if (process.env.NODE_ENV === "development") {
  if (!destination) {
    destination = pretty({ colorize: true });
  }
}

const logger = pino(
  {
    formatters: {
      level: (label, number) => {
        return { level: label };
      },
      bindings: (bindings) => {
        return {};
      },
    },
    level: process.env.LOGGER_LEVEL ?? "silent",
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  destination,
);

export default logger;
