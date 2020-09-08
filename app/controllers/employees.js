const { getEmployees, getEmployee } = require('../services/employees');
const { getEmployeesMapper, getEmployeeMapper } = require('../mappers/employees');
const { paginatedResponse } = require('../serializers/pagination');

exports.getEmployees = ({ query }, res, next) =>
  getEmployees(getEmployeesMapper(query))
    .then(employees =>
      res.status(200).send(paginatedResponse({ data: employees, offset: query.offset, limit: query.limit }))
    )
    .catch(next);

exports.getEmployee = (req, res, next) =>
  getEmployee(getEmployeeMapper(req.params))
    .then(employee => res.status(200).send(JSON.stringify(employee)))
    .catch(next);
