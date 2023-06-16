import {logger} from "./logs/logger.js";

export const createError = (status, message) => { // function for handling error
    logger.error(`${status || 500} - ${message}`); // write the error to log file
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};
