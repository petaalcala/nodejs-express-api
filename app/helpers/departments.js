const { getDepartment } = require('../services/departments');

exports.departmentValue = department =>
  new Promise(resolve => resolve(department ? getDepartment(department) : null));

exports.superDepartmentValue = departmentId => {
  let department = null;
  if (!departmentId) return null;
  department = exports.departmentValue(departmentId);
  if (!department.superdepartment) return department;
  return Promise.resolve({
    ...department,
    superdepartment: exports.departmentValue(department.superdepartment)
  });
};
