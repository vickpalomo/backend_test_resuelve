const middleware = require('../../middleware/middleware')
const mock = require('../../__mocks__/mock')

describe('middleware must validate that it receives a valid json', () => {
  it('with an json empty should respond with 400', async () => {
    const req = mock.mockRequest({})
    const res = mock.mockResponse()
    const next = mock.next
    await middleware.validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('with an players empty with an players empty', async () => {
    const req = mock.mockRequest({ players: {} })
    const res = mock.mockResponse()
    const next = mock.next
    await middleware.validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('with an levels empty should respond with 400', async () => {
    const req = mock.mockRequest({ players: mock.players, levels: {} })
    const res = mock.mockResponse()
    const next = mock.next
    await middleware.validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('with an invalid schema should respond with 400', async () => {
    const req = mock.mockRequest({ players: mock.playersMissingAttribute })
    const res = mock.mockResponse()
    const next = mock.next
    await middleware.validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('with an unknow level should respond with 404', async () => {
    const req = mock.mockRequest({ players: mock.playersUnknowLevel })
    const res = mock.mockResponse()
    const next = mock.next
    await middleware.validationsMiddleware(req, res, next)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  it('with an json valid should return next', async () => {
    const req = mock.mockRequest({ players: mock.players, levels: mock.levels })
    const res = mock.mockResponse()
    const next = mock.next
    await middleware.validationsMiddleware(req, res, next)
    expect(next.mock.calls).toEqual([[]])
  })
})
