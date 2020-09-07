// const controller = require('./controllers/controller');
const { validateSchemaAndFail } = require('./middlewares/paramsValidator');
const { setDefaultPaginationValues } = require('./middlewares/pagination');
const { healthCheck } = require('./controllers/healthCheck');
const { getEmployees } = require('./controllers/employees');
const { getEmployeesSchema } = require('./schemas/employees');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get(
    '/employees',
    [validateSchemaAndFail(getEmployeesSchema), setDefaultPaginationValues],
    getEmployees
  );
  // app.put('/endpoint/put/path', [], controller.methodPUT);
  // app.post('/endpoint/post/path', [], controller.methodPOST);
};
