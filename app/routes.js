// const controller = require('./controllers/controller');
const { healthCheck } = require('./controllers/healthCheck');
const { getEmployees } = require('./controllers/employees');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/employees', [], getEmployees);
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
