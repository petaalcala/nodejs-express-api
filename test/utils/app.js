const request = require('supertest');

exports.getResponse = ({ endpoint, header = {}, params = {}, body = {}, method = 'get' }) => {
  const app = require('../../app'); // eslint-disable-line
  return request(app)
  [method](`${endpoint}`) // eslint-disable-line
    .set(header)
    .query(params)
    .send(body);
};
