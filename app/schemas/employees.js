const paginationSchema = require('./pagination');
const ERROR_CATALOG = require('./errorsCatalog');

exports.getEmployeesSchema = {
  ...paginationSchema
};

exports.getEmployeeSchema = {
  id: {
    in: ['params'],
    isInt: true,
    toInt: true,
    errorMessage: ERROR_CATALOG.ID
  }
};
