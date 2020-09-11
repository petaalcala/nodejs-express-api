const { paginationMapper } = require('./pagination');

exports.getEmployeesMapper = params => ({
  ...paginationMapper(params),
  expand: params.expand,
  id: params.id
});

exports.getEmployeeMapper = params => ({
  id: params.id
});
