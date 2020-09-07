const ERROR_CATALOG = require('./errorsCatalog');

exports.getEmployeesSchema = {
  limit: {
    in: ['query'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: ERROR_CATALOG.LIMIT
  },
  offset: {
    in: ['query'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: ERROR_CATALOG.OFFSET
  }
};
