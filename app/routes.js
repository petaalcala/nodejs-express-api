// const controller = require('./controllers/controller');
const { validateSchemaAndFail } = require('./middlewares/paramsValidator');
const { healthCheck } = require('./controllers/healthCheck');
const { getEmployees, getEmployee } = require('./controllers/employees');
const { getOffices, getOffice } = require('./controllers/offices');
const { getDepartments, getDepartment } = require('./controllers/departments');
const { getEmployeesSchema, getEmployeeSchema } = require('./schemas/employees');
const { getOfficesSchema, getOfficeSchema } = require('./schemas/offices');
const { getDepartmentsSchema, getDepartmentSchema } = require('./schemas/departments');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/employees', [validateSchemaAndFail(getEmployeesSchema)], getEmployees);
  app.get('/employees/:id', [validateSchemaAndFail(getEmployeeSchema)], getEmployee);
  app.get('/offices', [validateSchemaAndFail(getOfficesSchema)], getOffices);
  app.get('/offices/:id', [validateSchemaAndFail(getOfficeSchema)], getOffice);
  app.get('/departments', [validateSchemaAndFail(getDepartmentsSchema)], getDepartments);
  app.get('/departments/:id', [validateSchemaAndFail(getDepartmentSchema)], getDepartment);
};
