const { getOffices, getOffice } = require('../services/offices');
const { processExpand } = require('../helpers/expands');
const logger = require('../logger');

exports.getOffices = async params => {
  try {
    logger.info(`Trying to get employees with params ${JSON.stringify(params)}`);
    const offices = getOffices(params);
    return await Promise.all(offices.map(office => processExpand(params.expand, office)));
  } catch (error) {
    logger.error('Error ocurred trying to get offices with message: ', error.message);
    throw error;
  }
};

exports.getOffice = async params => {
  try {
    logger.info(`Trying to get employee with params ${JSON.stringify(params)}`);
    const office = getOffice(params);
    return await processExpand(params.expand, office);
  } catch (error) {
    logger.error('Error ocurred trying to get office with message: ', error.message);
    throw error;
  }
};
