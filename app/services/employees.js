const axios = require('axios').default;
const logger = require('../logger');

exports.getEmployees = params => {
  logger.info(`Trying to get employees from external service with params: ${JSON.stringify(params)}}`);
  return axios
    .get('https://rfy56yfcwk.execute-api.us-west-1.amazonaws.com/bigcorp/employees', {
      params: {
        limit: params.limit,
        offset: params.offset
      }
    })
    .then(response => response.data)
    .catch(error => {
      logger.error(
        'Error ocurred trying to get employees from external service with message:',
        error.message
      );
      throw error;
    });
};

exports.getEmployee = params => {
  logger.info(`Trying to get employees from external service with params: ${JSON.stringify(params)}}`);
  return axios
    .get('https://rfy56yfcwk.execute-api.us-west-1.amazonaws.com/bigcorp/employees', {
      params: {
        id: params.id
      }
    })
    .then(response => response.data)
    .catch(error => {
      logger.error(
        'Error ocurred trying to get employees from external service with message:',
        error.message
      );
      throw error;
    });
};
