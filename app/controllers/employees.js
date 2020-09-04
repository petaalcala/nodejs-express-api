const { getEmployees } = require('../services/employees');
const { getEmployeesMapper } = require('../mappers/employees');

exports.getEmployees = (req, res, next) =>
  getEmployees(getEmployeesMapper(req.query))
    .then(employees => res.status(200).send(JSON.stringify(employees)))
    .catch(next);
