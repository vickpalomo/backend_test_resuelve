const validations = require('../../middleware/validation')
const levels = require('../../data/level')

const requestBody = {
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
  ]
}

const invalidSchemaPlayers = {
  players: [
    {
      nivel: 'C',
      goles: 10,
      sueldo: 50000,
      bono: 25000,
      sueldo_completo: null,
      equipo: 'rojo'
    }
  ]
}

const invalidLevel = [
  {
    nombre: 'EL Cuauh',
    nivel: 'Zero',
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul'
  }
]

const validSchemaPlayers = {
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
  ]
}

const expectErrors = {
  error: 'invalid request',
  message: 'No data to process'
}

const errorMissingAttribute = {
  error: 'invalid schema',
  message: "players should have required property 'nombre'"
}

const errorUnknowLevel = {
  error: 'invalid level',
  message: 'unknown levels were found'
}

describe('validation.js file', () => {
  describe('#isEmpty', () => {
    describe('when receive an empty json', () => {
      it('should return an object with the error message', () => {
        expect(validations.isEmpty({})).toEqual(expectErrors)
      })
    })

    describe('when not receive an empty json', () => {
      it('should return a empty object', () => {
        expect(validations.isEmpty(requestBody)).toEqual({})
      })
    })
  })

  describe('#validateSchemaPlayers', () => {
    describe('when receive a json with a missing attribute', () => {
      it('should return an object with the errors generated', () => {
        expect(validations.validateSchemaPlayer(invalidSchemaPlayers)).toEqual(errorMissingAttribute)
      })
    })

    describe('when receive a json with a valid schema', () => {
      it('should return a json without errors', () => {
        expect(validations.validateSchemaPlayer(validSchemaPlayers)).toEqual({})
      })
    })
  })

  describe('#validateSchemaLevels', () => {
    describe('when receive unknow levels', () => {
      it('should return a json without errors', () => {
        expect(validations.validateSchemaLevels(invalidLevel, levels)).toEqual(errorUnknowLevel)
      })
    })

    describe('when receive valid levels', () => {
      it('should return a json without errors', () => {
        expect(validations.validateSchemaLevels(requestBody.players, levels)).toEqual({})
      })
    })
  })
})
