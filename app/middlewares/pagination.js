const { defaultLimit, defaultOffset } = require('../../config').common.pagination;

// eslint-disable-next-line no-unused-vars
exports.setDefaultPaginationValues = (req, res, next) => {
  req.query.limit = req.query.limit || defaultLimit;
  req.query.offset = req.query.offset || defaultOffset;
  return next();
};
