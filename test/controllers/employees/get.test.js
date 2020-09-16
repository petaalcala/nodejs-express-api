const nock = require('nock');
const { getResponse } = require('../../utils/app');
const { externalApiEmployees } = require('../../mocks/employees');
const { departments } = require('../../../app/data/departments');

const { externalEmployeesServiceUrl } = require('../../../config').common;

// jest.mock('../../../app/services/employees');

nock(`${externalEmployeesServiceUrl}/bigcorp`)
  .get(/\/employees$/)
  .times(1000)
  .reply(200, externalApiEmployees)
  .get(/\/employees\?id=[1-9]+$/)
  .times(1000)
  .reply(200, [externalApiEmployees[1]]);

// nock(`${externalEmployeesServiceUrl}/bigcorp`)

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
      it('returns 200 status', () => {
        expect(getEmployeesWExpandRes.status).toBe(200);
      });
      it.only('returns employees with their manager', () => {
        getEmployeesWExpandRes.body.page.map(employee => expect(employee.manager).not.toBe(null));
      });

      it('returns employees with their department', () => {
        getEmployeesWExpandRes.body.page.map(employee => expect(employee.department).not.toBe(null));
      });
    });
  });
});

// describe('GET /employees/:id', () => {
//   const showRequest = (id, params = {}) =>
//     getResponse({ endpoint: `/employees/${id}`, method: 'get', params });
//   describe('without params', () => {
//     let getEmployeeRes = {};

//     beforeAll(async () => {
//       getEmployeeRes = await showRequest(1);
//     });

//     it('returns 200 status', () => {
//       expect(getEmployeeRes.status).toBe(200);
//     });
//     it('returns the first employee', () => {
//       expect(getEmployeeRes.body).toMatchObject(externalApiEmployees[1]);
//     });
//   });

//   describe('with params', () => {
//     describe('using expand query params', () => {
//       let getEmployeesWExpandRes = {};
//       beforeAll(async () => {
//         getEmployeesWExpandRes = await showRequest(6, { expand: ['manager.department'] });
//       });

//       it('returns 200 status', () => {
//         expect(getEmployeesWExpandRes.status).toBe(200);
//       });

//       it('returns correct employee i', () => {
//         expect(getEmployeesWExpandRes.body.id).toBe(2);
//       });

//       it('returns employee with their manager', () => {
//         expect(getEmployeesWExpandRes.body).toMatchObject({
//           ...externalApiEmployees[1],
//           manager: { ...externalApiEmployees[1], department: departments[4] }
//         });
//       });
//     });
//   });
// });
