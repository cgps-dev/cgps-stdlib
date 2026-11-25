import pino from "pino";

let transport;

if (process.env.LOGGER_TARGET === "file") {
  transport = {
    target: "pino/file",
    options: { destination: "./logs/pw-local.log" },
  };
}

if (process.env.NODE_ENV === "development") {
  if (!transport) {
    transport = {
      target: "pino-pretty",
      options: { colorize: true },
    };
  }
}

const logger = pino({
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
  transport,
});

export default logger;
