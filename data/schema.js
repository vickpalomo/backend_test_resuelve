const schema = {
  type: 'object',
  required: ['players'],
  properties: {
    players: {
      type: 'array',
      items: {
        type: 'object',
        required: ['nombre', 'nivel', 'goles', 'sueldo', 'bono', 'sueldo_completo', 'equipo'],
        properties: {
          nombre: { type: 'string', minimum: 1 },
          nivel: { type: 'string', minimum: 1 },
          goles: { type: 'number', minimum: 0 },
          sueldo: { type: 'number', minimum: 0 },
          bono: { type: 'number', minimum: 0 },
          sueldo_completo: { type: 'null' },
          equipo: { type: 'string', minimum: 1 }
        }
      }
    }
  }
}

module.exports = schema
