const { paginationSchema } = require('./pagination');
const { commonFiltersSchema, expandSchema } = require('./common');

exports.getDepartmentsSchema = {
  ...paginationSchema,
  ...commonFiltersSchema,
  ...expandSchema
};

exports.getDepartmentSchema = {
  ...commonFiltersSchema,
  ...expandSchema
};
