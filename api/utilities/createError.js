

// create a error
export const createError = (msg, staus) => {
    const err = new Error();
    err.message = msg;
    err.status = staus;
    return err;
}