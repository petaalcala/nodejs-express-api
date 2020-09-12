const { getOffices, getOffice } = require('../interactors/offices');
const { getEmployeesMapper, getEmployeeMapper } = require('../mappers/employees');
const { paginatedResponse } = require('../serializers/pagination');

exports.getOffices = ({ query }, res, next) =>
  getOffices(getEmployeesMapper(query))
    .then(offices =>
      res.status(200).send(paginatedResponse({ data: offices, offset: query.offset, limit: query.limit }))
    )
    .catch(next);

exports.getOffice = (req, res, next) =>
  getOffice(getEmployeeMapper(req.params, req.query))
    .then(office => res.status(200).send(office))
    .catch(next);
