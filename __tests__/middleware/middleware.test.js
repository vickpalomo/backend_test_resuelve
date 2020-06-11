const middleware = require('../../middleware/middleware')

const players = [
  {
    nombre: 'Juan Perez',
    nivel: 'C',
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: 'rojo'
  },
  {
    nombre: 'EL Cuauh',
    nivel: 'Cuauh',
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'Cosme Fulanito',
    nivel: 'A',
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'El Rulo',
    nivel: 'B',
    goles: 9,
    sueldo: 30000,
    bono: 15000,
    sueldo_completo: null,
    equipo: 'rojo'
  }
]
const levels = {
  rojo: {
    A: 5,
    B: 10,
    C: 20,
    Cuauh: 50
  },
  azul: {
    A: 10,
    B: 4,
    C: 6,
    Cuauh: 40
  }
}

const playersMissingAttribute = [
  {
    nivel: 'C',
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: 'rojo'
  },
  {
    nombre: 'EL Cuauh',
    nivel: 'Cuauh',
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'Cosme Fulanito',
    nivel: 'A',
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'El Rulo',
    nivel: 'B',
    goles: 9,
    sueldo: 30000,
    bono: 15000,
    sueldo_completo: null,
    equipo: 'rojo'
  }
]

const playersUnknowLevel = [
  {
    nombre: 'Juan Perez',
    nivel: 'Z',
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: 'rojo'
  },
  {
    nombre: 'EL Cuauh',
    nivel: 'Cuauh',
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'Cosme Fulanito',
    nivel: 'A',
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'El Rulo',
    nivel: 'B',
    goles: 9,
    sueldo: 30000,
    bono: 15000,
    sueldo_completo: null,
    equipo: 'rojo'
  }
]

const mockResponse = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

const mockRequest = (body) => {
  return {
    body: body
  }
}

describe('Middleware', () => {
  describe('#validationsMiddleware', () => {
    describe('with an json empty', () => {
      it('should respond with 400', async () => {
        const req = mockRequest({})
        const res = mockResponse()
        const next = jest.fn()
        await middleware.validationsMiddleware(req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
      })
    })
    describe('with an players json empty', () => {
      it('should respond with 400', async () => {
        const req = mockRequest({ players: {} })
        const res = mockResponse()
        const next = jest.fn()
        await middleware.validationsMiddleware(req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
      })
    })

    describe('with an levels json empty', () => {
      it('should respond with 400', async () => {
        const req = mockRequest({ players: players, levels: {} })
        const res = mockResponse()
        const next = jest.fn()
        await middleware.validationsMiddleware(req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
      })
    })

    describe('with an invalid schema', () => {
      it('should respond with 400', async () => {
        const req = mockRequest({ players: playersMissingAttribute })
        const res = mockResponse()
        const next = jest.fn()
        await middleware.validationsMiddleware(req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
      })
    })

    describe('with an unknow level', () => {
      it('should respond with 404', async () => {
        const req = mockRequest({ players: playersUnknowLevel })
        const res = mockResponse()
        const next = jest.fn()
        await middleware.validationsMiddleware(req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
      })
    })

    describe('with an json valid', () => {
      it('should return next', async () => {
        const req = mockRequest({ players: players, levels: levels })
        const res = mockResponse()
        const next = jest.fn()
        await middleware.validationsMiddleware(req, res, next)
        expect(next.mock.calls).toEqual([[]])
      })
    })
  })
})
