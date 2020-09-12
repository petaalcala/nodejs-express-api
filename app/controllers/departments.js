const { getDepartments, getDepartment } = require('../interactors/departments');
const { getEmployeesMapper, getEmployeeMapper } = require('../mappers/employees');
const { paginatedResponse } = require('../serializers/pagination');

exports.getDepartments = ({ query }, res, next) =>
  getDepartments(getEmployeesMapper(query))
    .then(departments =>
      res.status(200).send(paginatedResponse({ data: departments, offset: query.offset, limit: query.limit }))
    )
    .catch(next);

exports.getDepartment = (req, res, next) =>
  getDepartment(getEmployeeMapper(req.params, req.query))
    .then(department => res.status(200).send(department))
    .catch(next);
