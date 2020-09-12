const ERROR_CATALOG = require('./errorsCatalog');
const { defaultMaxLimit } = require('../../config').common.pagination;

exports.paginationSchema = {
  limit: {
    in: ['query'],
    isInt: {
      options: { min: 1, max: parseInt(defaultMaxLimit) }
    },
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
