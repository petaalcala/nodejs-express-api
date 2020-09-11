const { getDepartment } = require('../services/departments');

exports.departmentValue = department =>
  new Promise(resolve => resolve(department ? getDepartment(department) : null));
