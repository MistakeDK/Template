import * as log from "loglevel";

export enum LogLevel {
  trace = 0,
  debug = 1,
  info = 2,
  warn = 3,
  error = 4,
  silent = 5
}

export enum LoggerNames {
  Default = "VMS"
}

export const getLogger = (loggerName: string | symbol) => {
  const logger = log.getLogger(loggerName);
  console.log("PRODUCTION_MODE", !import.meta.env.DEV);
  if (import.meta.env.DEV) logger.setDefaultLevel("DEBUG");
  else logger.setDefaultLevel("INFO");
  return logger;
};
