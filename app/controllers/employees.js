const { getEmployees, getEmployee } = require('../interactors/employees');
const { getEmployeesMapper, getEmployeeMapper } = require('../mappers/employees');
const { paginatedResponse } = require('../serializers/pagination');

exports.getEmployees = ({ query }, res, next) =>
  getEmployees(getEmployeesMapper(query))
    .then(employees =>
      res.status(200).send(paginatedResponse({ data: employees, offset: query.offset, limit: query.limit }))
    )
    .catch(next);

exports.getEmployee = (req, res, next) =>
  getEmployee(getEmployeeMapper(req.params, req.query))
    .then(employee => res.status(200).send(employee))
    .catch(next);
