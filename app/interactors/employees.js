const { getEmployees, getEmployee } = require('../services/employees');
const { processExpand } = require('../helpers/expands');
const logger = require('../logger');

exports.getEmployees = async params => {
  try {
    logger.info(`Trying to get employees with params ${JSON.stringify(params)}`);
    const employees = await getEmployees(params);
    return await Promise.all(employees.map(employee => processExpand(params.expand, employee)));
  } catch (error) {
    logger.error('Error ocurred trying to get employees with message: ', error.message);
    throw error;
  }
};

exports.getEmployee = async params => {
  try {
    logger.info(`Trying to get employee with params ${JSON.stringify(params)}`);
    const employee = getEmployee(params);
    return await processExpand(params.expand, employee);
  } catch (error) {
    logger.error('Error ocurred trying to get employee with message: ', error.message);
    throw error;
  }
};
