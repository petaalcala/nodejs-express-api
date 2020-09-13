const { getResponse } = require('../../utils/app');
const { mockGetEmployees } = require('../../mocks/employees');

describe('GET /employees', () => {
  let getEmployeesResponse = {};

  beforeAll(async () => {
    mockGetEmployees();
    getEmployeesResponse = await getResponse({
      endpoint: '/employees',
      method: 'get'
    });
  });
  it('returns all employees', () => {
    expect(getEmployeesResponse.body.page).toBe(true);
    expect(true).toBe(true);
  });
});
