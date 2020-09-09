const { getEmployees } = require('../services/employees');
const { departmentValue } = require('../helpers/departments');
const { officeValue } = require('../helpers/offices');
const logger = require('../logger');

const functions = {
  department: departmentValue,
  superdepartment: departmentValue,
  office: officeValue
};

const functionRecursiva = (element, relationArrays = []) => {
  if (!relationArrays.length || !element) return element;

  const relatedValue = functions[relationArrays[0]](element[relationArrays[0]]);

  return {
    [relationArrays[0]]: {
      ...relatedValue,
      ...functionRecursiva(relatedValue, relationArrays.slice(1))
    }
  };
};

exports.getEmployees = params =>
  getEmployees(params)
    .then(employees =>
      Promise.resolve(
        employees.map(employee =>
          params.expand.reduce(
            (acc, item) => ({ ...acc, ...functionRecursiva(acc, item.split('.')) }),
            employee
          )
        )
      )
    )
    .catch(error => {
      logger.error('Error ocurred trying to get employees with message: ', error.message);
      throw error;
    });
