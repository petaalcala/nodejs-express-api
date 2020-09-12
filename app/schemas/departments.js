const { paginationSchema } = require('./pagination');
const { commonFiltersSchema } = require('./common');

exports.getDepartmentsSchema = {
  ...paginationSchema,
  ...commonFiltersSchema
};

exports.getDepartmentSchema = {
  ...commonFiltersSchema
};
