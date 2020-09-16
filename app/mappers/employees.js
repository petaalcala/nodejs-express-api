const { paginationMapper } = require('./pagination');

exports.getEmployeesMapper = params => ({
  ...paginationMapper(params),
  expand: params.expand,
  id: params.id
});

exports.getEmployeeMapper = (params, query) => ({
  id: params.id,
  expand: query.expand || null
});
