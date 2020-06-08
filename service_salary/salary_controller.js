const lib = require('../lib/lib')
const levelsResuelve = require('../data/level')

/**
 * @api {post} /salary/calculateSalary Calculate Salary
 * @apiDescription Calculate the final salary of the players, based on their individual and team goals
 * @apiName CalculateSalary
 * @apiGroup Salary
 * @apiHeaderExample {json} Headers:
 *     {
 *       "Content-Type": "application/json"
 *     }
 * @apiParam {Object[]} players Players Array
 * @apiParam {String}   players.nombre Player's name
 * @apiParam {String}   players.nivel Player level
 * @apiParam {Number}   players.goles Goals Scored By Player
 * @apiParam {Number}   players.sueldo Player Base Salary
 * @apiParam {Number}   players.bono Player bonus
 * @apiParam {Null}     players.sueldo_completo Player's full salary (Data to be calculated by the api)
 * @apiParam {String}   players.equipo Team
 * @apiParam {JSON}   [levels] Levels per team, send this object if you want to change the predefined levels that the api implements. See JSON Levels tab
 * @apiParamExample {JSON} JSON Levels
  "levels":{
    "rojo": {
      "A":5,
      "B":10,
      "C":20,
      "Cuauh":50
    },
    "azul": {
      "A":10,
      "B":4,
      "C":6,
      "Cuauh":40
    }
  }
 * @apiParamExample {JSON}  Request Resuelve Team
 *  {
  "players": [
     {
        "nombre":"Juan Perez",
        "nivel":"C",
        "goles":10,
        "sueldo":50000,
        "bono":25000,
        "sueldo_completo":null,
        "equipo":"rojo"
     },
     {
        "nombre":"EL Cuauh",
        "nivel":"Cuauh",
        "goles":30,
        "sueldo":100000,
        "bono":30000,
        "sueldo_completo":null,
        "equipo":"azul"
     },
     {
        "nombre":"Cosme Fulanito",
        "nivel":"A",
        "goles":7,
        "sueldo":20000,
        "bono":10000,
        "sueldo_completo":null,
        "equipo":"azul"
     },
     {
        "nombre":"El Rulo",
        "nivel":"B",
        "goles":9,
        "sueldo":30000,
        "bono":15000,
        "sueldo_completo":null,
        "equipo":"rojo"
     }
    ]
  }
  @apiParamExample {JSON} Request External Team
  {
    "players": [
     {
        "nombre":"Juan Perez",
        "nivel":"C",
        "goles":10,
        "sueldo":50000,
        "bono":25000,
        "sueldo_completo":null,
        "equipo":"rojo"
     },
     {
        "nombre":"EL Cuauh",
        "nivel":"Cuauh",
        "goles":30,
        "sueldo":100000,
        "bono":30000,
        "sueldo_completo":null,
        "equipo":"azul"
     },
     {
        "nombre":"Cosme Fulanito",
        "nivel":"A",
        "goles":7,
        "sueldo":20000,
        "bono":10000,
        "sueldo_completo":null,
        "equipo":"azul"
     },
     {
        "nombre":"El Rulo",
        "nivel":"B",
        "goles":9,
        "sueldo":30000,
        "bono":15000,
        "sueldo_completo":null,
        "equipo":"rojo"
     }
   ],
  "levels":{
    "rojo": {
      "A":5,
      "B":10,
      "C":20,
      "Cuauh":50
    },
    "azul": {
      "A":10,
      "B":4,
      "C":6,
      "Cuauh":40
    }
  }
}
 * @apiSuccess {Object[]} players Players Array
 * @apiSuccess {String}   players.nombre Player's name
 * @apiSuccess {String}   players.nivel Player level
 * @apiSuccess {Number}   players.goles Goals Scored By Player
 * @apiSuccess {Number}   players.sueldo Player Base Salary
 * @apiSuccess {Number}   players.bono Player bonus
 * @apiSuccess {Null}     players.sueldo_completo Player's full salary (Data to be calculated by the api)
 * @apiSuccess {String}   players.equipo Team
 *@apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
        {
            "nombre": "Juan Perez",
            "goles_minimos": 15,
            "goles": 10,
            "sueldo": 50000,
            "bono": 25000,
            "sueldo_completo": 67832.5,
            "equipo": "rojo"
        },
        {
            "nombre": "EL Cuauh",
            "goles_minimos": 20,
            "goles": 30,
            "sueldo": 100000,
            "bono": 30000,
            "sueldo_completo": 130000,
            "equipo": "azul"
        },
        {
            "nombre": "Cosme Fulanito",
            "goles_minimos": 5,
            "goles": 7,
            "sueldo": 20000,
            "bono": 10000,
            "sueldo_completo": 30000,
            "equipo": "azul"
        },
        {
            "nombre": "El Rulo",
            "goles_minimos": 10,
            "goles": 9,
            "sueldo": 30000,
            "bono": 15000,
            "sueldo_completo": 42450,
            "equipo": "rojo"
        }
      ]
 * @apiError {Object} JsonEmpty No data to process
 * @apiErrorExample {json} JSONEmpty:
 *  HTTP/1.1 400 Bad Request
 *     {
 *       "error": "No data to process"
 *     }
 * @apiError {Object} SchemaErrors The errors related to the structure of the json are concentrated, as well as the type of data that must be sent in each key. See SchemaErrors tab.
 * @apiErrorExample {Json} SchemaErrors:
 *  HTTP/1.1 400 Bad Request
 *      {
          "field": "goles",
          "message": "should be >= 0"
 *       }
 * @apiError {Object} UnknowLevel This error occurs when the player level is not in the levels json
 * @apiErrorExample {json} UnknowLevel:
 *  HTTP/1.1 400 Bad Request
 *    {
        "field": "nivel",
        "message": "unknown levels were found"
      }
 */
const calculateSalary = (req, res) => {
  const levels = req.body.levels || levelsResuelve
  const teamData = req.body.players
  const teamDataToGetSalary = lib.teamDataToReplaceLevels(teamData, levels)
  const percentageTeam = lib.getPercentageTeam(teamDataToGetSalary)
  const teamDataFullSalary = lib.getTotalSalary(teamDataToGetSalary, percentageTeam)
  return res.status(200).json(teamDataFullSalary)
}

module.exports = calculateSalary
