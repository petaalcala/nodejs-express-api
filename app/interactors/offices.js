const { getOffices, getOffice } = require('../services/offices');
const logger = require('../logger');

exports.getOffices = params => {
  try {
    logger.info(`Trying to get offices with params ${JSON.stringify(params)}`);
    return Promise.resolve(getOffices(params));
  } catch (error) {
    logger.error('Error ocurred trying to get offices with message: ', error.message);
    throw error;
  }
};

exports.getOffice = params => {
  try {
    logger.info(`Trying to get office with params ${JSON.stringify(params)}`);
    return Promise.resolve(getOffice(params));
  } catch (error) {
    logger.error('Error ocurred trying to get office with message: ', error.message);
    throw error;
  }
};
