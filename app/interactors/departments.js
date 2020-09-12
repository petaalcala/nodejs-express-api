const { getDepartments, getDepartment } = require('../services/departments');
const { processExpand } = require('../helpers/expands');
const logger = require('../logger');

exports.getDepartments = async params => {
  try {
    logger.info(`Trying to get departments with params ${JSON.stringify(params)}`);
    const departments = getDepartments(params);
    return await Promise.all(departments.map(department => processExpand(params.expand, department)));
  } catch (error) {
    logger.error('Error ocurred trying to get offices with message: ', error.message);
    throw error;
  }
};

exports.getDepartment = async params => {
  try {
    logger.info(`Trying to get department with params ${JSON.stringify(params)}`);
    const department = getDepartment(params);
    return await processExpand(params.expand, department);
  } catch (error) {
    logger.error('Error ocurred trying to get office with message: ', error.message);
    throw error;
  }
};
