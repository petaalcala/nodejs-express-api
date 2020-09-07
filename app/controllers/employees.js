const { getEmployees } = require('../services/employees');
const { getEmployeesMapper } = require('../mappers/employees');
const { paginatedResponse } = require('../serializers/pagination');

exports.getEmployees = ({ query }, res, next) =>
  getEmployees(getEmployeesMapper(query))
    .then(employees =>
      res.status(200).send(paginatedResponse({ data: employees, offset: query.offset, limit: query.limit }))
    )
    .catch(next);
