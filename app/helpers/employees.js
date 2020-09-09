const { getDepartment } = require('../services/departments');

exports.departmentValue = department => (department ? getDepartment(department) : null);

exports.superDepartmentValue = departmentId => {
  let department = null;
  if (!departmentId) return null;
  department = exports.departmentValue(departmentId);
  if (!department.superdepartment) return department;
  return { ...department, superdepartment: exports.departmentValue(department.superdepartment) };
};

exports.addDepartmentInfo = employees =>
  employees.map(employee => ({ ...employee, department: exports.departmentValue(employee.department) }));

exports.addSuperDepartmentInfo = employees =>
  employees.map(employee => ({
    ...employee,
    department: exports.superDepartmentValue(employee.department)
  }));
