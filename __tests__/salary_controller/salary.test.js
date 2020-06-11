const salary = require('../../service_salary/salary_controller')

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

const response = [
  {
    nombre: 'Juan Perez',
    goles_minimos: 15,
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: 67832.5,
    equipo: 'rojo'
  },
  {
    nombre: 'EL Cuauh',
    goles_minimos: 20,
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: 130000,
    equipo: 'azul'
  },
  {
    nombre: 'Cosme Fulanito',
    goles_minimos: 5,
    goles: 7,
    sueldo: 20000,
    bono: 10000,
    sueldo_completo: 30000,
    equipo: 'azul'
  },
  {
    nombre: 'El Rulo',
    goles_minimos: 10,
    goles: 9,
    sueldo: 30000,
    bono: 15000,
    sueldo_completo: 42450,
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

describe('Salary Controller', () => {
  describe('#calculateSalary', () => {
    describe('with an json valid', () => {
      it('should respond with 200', async () => {
        const req = mockRequest({ players: players })
        const res = mockResponse()
        await salary.calculateSalary(req, res)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(response)
      })
    })
  })
})
