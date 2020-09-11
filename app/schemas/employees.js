const paginationSchema = require('./pagination');
const ERROR_CATALOG = require('./errorsCatalog');

exports.getEmployeesSchema = {
  ...paginationSchema,
  expand: {
    in: ['query'],
    toArray: true,
    optional: true,
    errorMessage: ERROR_CATALOG.EXPAND
  },
  id: {
    in: ['query'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: ERROR_CATALOG.ID
  }
};

exports.getEmployeeSchema = {
  id: {
    in: ['params'],
    isInt: true,
    toInt: true,
    errorMessage: ERROR_CATALOG.ID
  }
};
