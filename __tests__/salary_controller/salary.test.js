const salary = require('../../service_salary/salary_controller')
const mock = require('../../__mocks__/mock')

describe('when the salary controller receives a valid json', () => {
  it('should respond with 200', async () => {
    const req = mock.mockRequest({ players: mock.players })
    const res = mock.mockResponse()
    await salary.calculateSalary(req, res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(mock.responseAPI)
  })
})
