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

const findRelation = async (element, relationArrays = []) => {
  if (!relationArrays.length || !element) return element;

  const functionToApply = functions[relationArrays[0]];
  if (!functionToApply) return {};

  const relatedValue = await functionToApply((await element)[relationArrays[0]]);

  return {
    [relationArrays[0]]: {
      ...relatedValue,
      ...(await findRelation(relatedValue, relationArrays.slice(1)))
    }
  };
};

const processRelations = (expands, employee) =>
  Promise.all(expands.map(expand => findRelation(employee, expand.split('.'))));

exports.getEmployees = async params => {
  try {
    const employees = await getEmployees(params);
    return await Promise.all(
      employees.map(async employee => {
        const relations = params.expand ? await processRelations(params.expand, employee) : [];
        return relations.reduce((acc, item) => ({ ...acc, ...item }), employee);
      })
    );
  } catch (error) {
    logger.error('Error ocurred trying to get employees with message: ', error.message);
    throw error;
  }
};
