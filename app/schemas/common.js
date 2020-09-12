const ERROR_CATALOG = require('./errorsCatalog');

exports.expandSchema = {
  expand: {
    in: ['query'],
    toArray: true,
    optional: true,
    errorMessage: ERROR_CATALOG.EXPAND
  }
};

exports.commonFiltersSchema = {
  id: {
    in: ['query'],
    isInt: true,
    toInt: true,
    optional: true,
    errorMessage: ERROR_CATALOG.ID,
    custom: {
      options: (value, { req }) => !(req.query.limit || req.query.offset) && value
    }
  }
};
