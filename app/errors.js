const internalError = (message, internalCode) => ({
  message,
  internalCode
});

const invalidParamsError = (errors, internalCode) => ({
  errors,
  internalCode
});

exports.INVALID_PARAMS = 'invalid_params';
exports.invalidParams = message => invalidParamsError(message, exports.INVALID_PARAMS);

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);
