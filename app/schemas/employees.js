const { paginationSchema } = require('./pagination');
const { commonFiltersSchema, expandSchema } = require('./common');

exports.getEmployeesSchema = {
  ...paginationSchema,
  ...commonFiltersSchema,
  ...expandSchema
};

exports.getEmployeeSchema = {
  ...commonFiltersSchema,
  ...expandSchema
};
