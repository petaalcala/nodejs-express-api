const { getResponse } = require('../../utils/app');
const { externalApiEmployees } = require('../../mocks/employees');
const { departments } = require('../../../app/data/departments');

jest.mock('../../../app/services/employees');

describe('GET /employees', () => {
  const request = (params = {}) => getResponse({ endpoint: '/employees', method: 'get', params });
  describe('without params', () => {
    let getEmployeesResponse = {};

    beforeAll(async () => {
      getEmployeesResponse = await request();
    });

    it('returns 200 status', () => {
      expect(getEmployeesResponse.status).toBe(200);
    });
    it('returns all employees', () => {
      expect(getEmployeesResponse.body.page).toMatchObject(externalApiEmployees);
    });
  });

  describe('with params', () => {
    describe('using expand query params', () => {
      let getEmployeesWExpandRes = {};
      beforeAll(async () => {
        getEmployeesWExpandRes = await request({ expand: ['manager', 'department.superdepartment'] });
      });
      it('returns employees with their manager', () => {
        getEmployeesWExpandRes.body.page.map(employee => expect(employee.manager).not.toBe(null));
      });

      it('returns employees with their department', () => {
        getEmployeesWExpandRes.body.page.map(employee => expect(employee.department).not.toBe(null));
      });
    });
  });
});

describe('GET /employees/:id', () => {
  const showRequest = (id, params = {}) =>
    getResponse({ endpoint: `/employees/${id}`, method: 'get', params });
  describe('without params', () => {
    let getEmployeeRes = {};

    beforeAll(async () => {
      getEmployeeRes = await showRequest(1);
    });

    it('returns 200 status', () => {
      expect(getEmployeeRes.status).toBe(200);
    });
    it('returns the first employee', () => {
      expect(getEmployeeRes.body).toMatchObject(externalApiEmployees[0]);
    });
  });

  describe('with params', () => {
    describe('using expand query params', () => {
      let getEmployeesWExpandRes = {};
      beforeAll(async () => {
        getEmployeesWExpandRes = await showRequest(6, { expand: ['manager.department'] });
      });

      it('returns correct employee i', () => {
        expect(getEmployeesWExpandRes.body.id).toBe(6);
      });

      it('returns employee with their manager', () => {
        expect(getEmployeesWExpandRes.body).toMatchObject({
          ...externalApiEmployees[5],
          manager: { ...externalApiEmployees[3], department: departments[5] }
        });
      });
    });
  });
});
