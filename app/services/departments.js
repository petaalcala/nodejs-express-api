const { departments } = require('../data/departments');

exports.getDepartment = departmentId => departments.find(elem => elem.id === departmentId);

exports.getDepartments = params => {
  let departmentsToReturn = departments;
  departmentsToReturn = params.id
    ? departmentsToReturn.filter(elem => elem.id === params.id)
    : departmentsToReturn;
  departmentsToReturn = params.offset ? departmentsToReturn.slice(params.offset) : departmentsToReturn;
  departmentsToReturn = params.limit ? departmentsToReturn.slice(0, params.limit) : departmentsToReturn;
  return departmentsToReturn;
};
