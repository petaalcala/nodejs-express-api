const { paginationSchema } = require('./pagination');
const { commonFiltersSchema, expandSchema } = require('./common');
const ERROR_CATALOG = require('./errorsCatalog');

exports.getEmployeesSchema = {
  ...paginationSchema,
  ...commonFiltersSchema,
  ...expandSchema
};

exports.getEmployeeSchema = {
  ...commonFiltersSchema,
  ...expandSchema,
  id: {
    in: ['params'],
    toInt: true,
    isInt: {
      options: { min: 1 }
    },
    errorMessage: ERROR_CATALOG.ID
  }
};
