const { getEmployees } = require('../services/employees');
const { getEmployeesMapper } = require('../mappers/employees');
const { paginatedResponse } = require('../serializers/pagination');

exports.getEmployees = (req, res, next) =>
  getEmployees(getEmployeesMapper(req.query))
    .then(employees =>
      res
        .status(200)
        .send(paginatedResponse({ data: employees, offset: req.query.offset, limit: req.query.limit }))
    )
    .catch(next);
