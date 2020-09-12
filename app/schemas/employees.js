const { paginationSchema } = require('./pagination');
const { commonFiltersSchema } = require('./common');

exports.getEmployeesSchema = {
  ...paginationSchema,
  ...commonFiltersSchema
};

exports.getEmployeeSchema = {
  ...commonFiltersSchema
};
