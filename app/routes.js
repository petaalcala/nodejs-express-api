// const controller = require('./controllers/controller');
const { validateSchemaAndFail } = require('./middlewares/paramsValidator');
const { healthCheck } = require('./controllers/healthCheck');
const { getEmployees, getEmployee } = require('./controllers/employees');
const { getEmployeesSchema, getEmployeeSchema } = require('./schemas/employees');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/employees', [validateSchemaAndFail(getEmployeesSchema)], getEmployees);
  app.get('/employees/:id', [validateSchemaAndFail(getEmployeeSchema)], getEmployee);
};
