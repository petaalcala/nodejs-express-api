const { getEmployees } = require('../services/employees');
const { departmentValue } = require('../helpers/departments');
const { officeValue } = require('../helpers/offices');
const { employeeValue } = require('../helpers/employees');
const logger = require('../logger');

const functions = {
  department: departmentValue,
  superdepartment: departmentValue,
  office: officeValue,
  manager: employeeValue
};

const functionRecursiva = async (element, relationArrays = []) => {
  if (!relationArrays.length || !element) return element;

  const relatedValue = await functions[relationArrays[0]]((await element)[relationArrays[0]]);

  return {
    [relationArrays[0]]: {
      ...relatedValue,
      ...(await functionRecursiva(relatedValue, relationArrays.slice(1)))
    }
  };
};

exports.getEmployees = async params => {
  try {
    const employees = await getEmployees(params);
    return await Promise.all(
      employees.map(async employee => {
        const relations = await Promise.all(
          params.expand.map(expand => functionRecursiva(employee, expand.split('.')))
        );
        return relations.reduce((acc, item) => ({ ...acc, ...item }), employee);
      })
    );
  } catch (error) {
    logger.error('Error ocurred trying to get employees with message: ', error.message);
    throw error;
  }
};
