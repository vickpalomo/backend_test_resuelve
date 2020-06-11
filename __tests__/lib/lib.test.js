const lib = require('../../lib/lib')

const levels = require('../../data/level')

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

const expectJsonResponse = [
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

const playersWithReplacedLevels = [
  {
    nombre: 'Juan Perez',
    goles_minimos: 15,
    goles: 10,
    sueldo: 50000,
    bono: 25000,
    sueldo_completo: null,
    equipo: 'rojo'
  },
  {
    nombre: 'EL Cuauh',
    goles_minimos: 20,
    goles: 30,
    sueldo: 100000,
    bono: 30000,
    sueldo_completo: null,
    equipo: 'azul'
  },
  {
    nombre: 'Cosme Fulanito',
    goles_minimos: 5,
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
]

const totalGoalAndPercentageTeam = { 
  rojo: { goals_required: 25, goals_scored: 19, percentageTeam: 76 },
  azul: { goals_required: 25, goals_scored: 37, percentageTeam: 100 } 
}

describe('lib.js file', () => {
  describe('#teamDataToReplace', () => {
    describe('when receive a valid array of players', () => {
      it('should remove the level key and replace it with the key goles_minimos', () => {
        expect(lib.teamDataToReplaceLevels(players, levels)).toEqual(playersWithReplacedLevels)
      })
    })
  })

  describe('#getPercentageTeam', () => {
    describe('when receive a valid array of players', () => {
      it('should accumulate the goals required and scored by team and calculate the percentage obtained from the total', () => {
        expect(lib.getPercentageTeam(playersWithReplacedLevels)).toEqual(totalGoalAndPercentageTeam)
      })
    })
  })

  describe('#getTotalSalary', () => {
    describe('when receive a valid array of players', () => {
      it('should calculate the full salary of each player', () => {
        expect(lib.getTotalSalary(playersWithReplacedLevels, totalGoalAndPercentageTeam)).toEqual(expectJsonResponse)
      })
    })
  })
})
