const { paginationSchema } = require('./pagination');
const { commonFiltersSchema } = require('./common');

exports.getOfficesSchema = {
  ...paginationSchema,
  ...commonFiltersSchema
};

exports.getOfficeSchema = {
  ...commonFiltersSchema
};
