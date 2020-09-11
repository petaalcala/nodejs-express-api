const axios = require('axios').default;
const { setup, RedisStore } = require('axios-cache-adapter');
const redis = require('redis');
const logger = require('../logger');
const {
  externalEmployeesServiceUrl,
  redis: { url: redisUrl }
} = require('../../config').common;

const client = redis.createClient({ url: redisUrl });
const store = new RedisStore(client);
const cachedExternalApi = setup({
  cache: {
    maxAge: 2 * 60 * 1000,
    store,
    exclude: { query: false }
  }
});

const callExternalEmployees = params => {
  logger.info(`Trying to get employees from external service with params: ${JSON.stringify(params)}}`);
  return axios.get(`${externalEmployeesServiceUrl}/bigcorp/employees`, { params });
};

const cachedCallExternalEmployees = params => {
  logger.info(`Trying to get employees from external service with params: ${JSON.stringify(params)}}`);
  return cachedExternalApi.get(`${externalEmployeesServiceUrl}/bigcorp/employees`, {
    params
  });
};

exports.getEmployees = params =>
  callExternalEmployees({ limit: params.limit, offset: params.offset, id: params.id })
    .then(response => response.data)
    .catch(error => {
      logger.error(
        'Error ocurred trying to get employees from external service with message:',
        error.message
      );
      throw error;
    });

exports.getEmployee = params =>
  cachedCallExternalEmployees({ id: params.id })
    .then(response => response.data[0])
    .catch(error => {
      logger.error(
        'Error ocurred trying to get employees from external service with message:',
        error.message
      );
      throw error;
    });
