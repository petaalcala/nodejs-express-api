const { getResponse } = require('../../utils/app');

jest.mock('../../../app/services/employees');

describe('GET /employees', () => {
  let getEmployeesResponse = {};

  beforeAll(async () => {
    getEmployeesResponse = await getResponse({
      endpoint: '/employees',
      method: 'get'
    });
  });
  it('returns all employees', () => {
    expect(getEmployeesResponse.body).not.toBe(undefined);
  });
});
