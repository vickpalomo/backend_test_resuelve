module.exports = {
  mockResponse: () => {
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
  },
  mockRequest: (body) => {
    return {
      body: body
    }
  },
  next: jest.fn(),
  expectErrors: {
    error: 'invalid request',
    message: 'No data to process'
  },
  errorMissingAttribute: {
    error: 'invalid schema',
    message: "players should have required property 'nombre'"
  },
  errorUnknowLevel: {
    error: 'invalid level',
    message: 'unknown levels were found'
  },
  totalGoalAndPercentageTeam: {
    rojo: { goals_required: 30, goals_scored: 19, percentageTeam: 63.33 },
    azul: { goals_required: 50, goals_scored: 37, percentageTeam: 74 }
  },
  players: [
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
  ],
  playersWithReplacedLevels: [
    {
      nombre: 'Juan Perez',
      goles_minimos: 20,
      goles: 10,
      sueldo: 50000,
      bono: 25000,
      sueldo_completo: null,
      equipo: 'rojo'
    },
    {
      nombre: 'EL Cuauh',
      goles_minimos: 40,
      goles: 30,
      sueldo: 100000,
      bono: 30000,
      sueldo_completo: null,
      equipo: 'azul'
    },
    {
      nombre: 'Cosme Fulanito',
      goles_minimos: 10,
      goles: 7,
      sueldo: 20000,
      bono: 10000,
      sueldo_completo: null,
      equipo: 'azul'
    },
    {
      nombre: 'El Rulo',
      goles_minimos: 10,
      goles: 9,
      sueldo: 30000,
      bono: 15000,
      sueldo_completo: null,
      equipo: 'rojo'
    }
  ],
  levels: {
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
  },
  responseAPI: [
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
  ],
  playersMissingAttribute: [
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
  ],
  playersUnknowLevel: [
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
  ],
  jsonResponse: [
    {
      nombre: 'Juan Perez',
      goles_minimos: 20,
      goles: 10,
      sueldo: 50000,
      bono: 25000,
      sueldo_completo: 64166.25,
      equipo: 'rojo'
    },
    {
      nombre: 'EL Cuauh',
      goles_minimos: 40,
      goles: 30,
      sueldo: 100000,
      bono: 30000,
      sueldo_completo: 122350,
      equipo: 'azul'
    },
    {
      nombre: 'Cosme Fulanito',
      goles_minimos: 10,
      goles: 7,
      sueldo: 20000,
      bono: 10000,
      sueldo_completo: 27200,
      equipo: 'azul'
    },
    {
      nombre: 'El Rulo',
      goles_minimos: 10,
      goles: 9,
      sueldo: 30000,
      bono: 15000,
      sueldo_completo: 41499.74,
      equipo: 'rojo'
    }
  ]
}
