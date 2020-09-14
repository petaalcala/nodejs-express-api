const { externalApiEmployees } = require('../../../test/mocks/employees');

const employees = jest.genMockFromModule('../employees');

employees.getEmployees = jest.fn(() => Promise.resolve(externalApiEmployees));
employees.getEmployee = jest.fn(params =>
  Promise.resolve(externalApiEmployees.find(elem => params.id === elem.id))
);

module.exports = employees;
