exports.getEmployeesMapper = params => ({
  limit: params.limit,
  offset: params.offset
});

exports.getEmployeeMapper = params => ({
  id: params.id
});
