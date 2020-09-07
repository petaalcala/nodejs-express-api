const axios = require('axios').default;
const logger = require('../logger');
const { externalEmployeesServiceUrl } = require('../../config').common;

const callExternalEmployees = params => {
  logger.info(`Trying to get employees from external service with params: ${JSON.stringify(params)}}`);
  return axios.get(`${externalEmployeesServiceUrl}/bigcorp/employees`, { params });
};

exports.getEmployees = params =>
  callExternalEmployees({ limit: params.limit, offset: params.offset })
    .then(response => response.data)
    .catch(error => {
      logger.error(
        'Error ocurred trying to get employees from external service with message:',
        error.message
      );
      throw error;
    });

exports.getEmployee = params =>
  callExternalEmployees({ id: params.id })
    .then(response => response.data)
    .catch(error => {
      logger.error(
        'Error ocurred trying to get employees from external service with message:',
        error.message
      );
      throw error;
    });
