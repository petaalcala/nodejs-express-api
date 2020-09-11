const { getEmployee } = require('../services/employees');

exports.employeeValue = employee =>
  new Promise(resolve =>
    resolve(employee ? getEmployee({ id: employee }).then(employeeFound => employeeFound) : null)
  );
