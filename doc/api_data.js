define({ "api": [
  {
    "type": "post",
    "url": "/salary/calculateSalary",
    "title": "Calculate Salary",
    "description": "<p>Calculate the final salary of the players, based on their individual and team goals</p>",
    "name": "CalculateSalary",
    "group": "Salary",
    "header": {
      "examples": [
        {
          "title": "Headers:",
          "content": "{\n  \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players Array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "players.nombre",
            "description": "<p>Player's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "players.nivel",
            "description": "<p>Player level</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "players.goles",
            "description": "<p>Goals Scored By Player</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "players.sueldo",
            "description": "<p>Player Base Salary</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "players.bono",
            "description": "<p>Player bonus</p>"
          },
          {
            "group": "Parameter",
            "type": "Null",
            "optional": false,
            "field": "players.sueldo_completo",
            "description": "<p>Player's full salary (Data to be calculated by the api)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "players.equipo",
            "description": "<p>Team</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": true,
            "field": "levels",
            "description": "<p>Levels per team, send this object if you want to change the predefined levels that the api implements. See JSON Levels tab</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSON Levels",
          "content": "\"levels\":{\n  \"rojo\": {\n    \"A\":5,\n    \"B\":10,\n    \"C\":20,\n    \"Cuauh\":50\n  },\n  \"azul\": {\n    \"A\":10,\n    \"B\":4,\n    \"C\":6,\n    \"Cuauh\":40\n  }\n}",
          "type": "JSON"
        },
        {
          "title": "Request Resuelve Team",
          "content": "{\n \"players\": [\n    {\n       \"nombre\":\"Juan Perez\",\n       \"nivel\":\"C\",\n       \"goles\":10,\n       \"sueldo\":50000,\n       \"bono\":25000,\n       \"sueldo_completo\":null,\n       \"equipo\":\"rojo\"\n    },\n    {\n       \"nombre\":\"EL Cuauh\",\n       \"nivel\":\"Cuauh\",\n       \"goles\":30,\n       \"sueldo\":100000,\n       \"bono\":30000,\n       \"sueldo_completo\":null,\n       \"equipo\":\"azul\"\n    },\n    {\n       \"nombre\":\"Cosme Fulanito\",\n       \"nivel\":\"A\",\n       \"goles\":7,\n       \"sueldo\":20000,\n       \"bono\":10000,\n       \"sueldo_completo\":null,\n       \"equipo\":\"azul\"\n    },\n    {\n       \"nombre\":\"El Rulo\",\n       \"nivel\":\"B\",\n       \"goles\":9,\n       \"sueldo\":30000,\n       \"bono\":15000,\n       \"sueldo_completo\":null,\n       \"equipo\":\"rojo\"\n    }\n   ]\n }",
          "type": "JSON"
        },
        {
          "title": "Request External Team",
          "content": "  {\n    \"players\": [\n     {\n        \"nombre\":\"Juan Perez\",\n        \"nivel\":\"C\",\n        \"goles\":10,\n        \"sueldo\":50000,\n        \"bono\":25000,\n        \"sueldo_completo\":null,\n        \"equipo\":\"rojo\"\n     },\n     {\n        \"nombre\":\"EL Cuauh\",\n        \"nivel\":\"Cuauh\",\n        \"goles\":30,\n        \"sueldo\":100000,\n        \"bono\":30000,\n        \"sueldo_completo\":null,\n        \"equipo\":\"azul\"\n     },\n     {\n        \"nombre\":\"Cosme Fulanito\",\n        \"nivel\":\"A\",\n        \"goles\":7,\n        \"sueldo\":20000,\n        \"bono\":10000,\n        \"sueldo_completo\":null,\n        \"equipo\":\"azul\"\n     },\n     {\n        \"nombre\":\"El Rulo\",\n        \"nivel\":\"B\",\n        \"goles\":9,\n        \"sueldo\":30000,\n        \"bono\":15000,\n        \"sueldo_completo\":null,\n        \"equipo\":\"rojo\"\n     }\n   ],\n  \"levels\":{\n    \"rojo\": {\n      \"A\":5,\n      \"B\":10,\n      \"C\":20,\n      \"Cuauh\":50\n    },\n    \"azul\": {\n      \"A\":10,\n      \"B\":4,\n      \"C\":6,\n      \"Cuauh\":40\n    }\n  }\n}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "players",
            "description": "<p>Players Array</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "players.nombre",
            "description": "<p>Player's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "players.nivel",
            "description": "<p>Player level</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "players.goles",
            "description": "<p>Goals Scored By Player</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "players.sueldo",
            "description": "<p>Player Base Salary</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "players.bono",
            "description": "<p>Player bonus</p>"
          },
          {
            "group": "Success 200",
            "type": "Null",
            "optional": false,
            "field": "players.sueldo_completo",
            "description": "<p>Player's full salary (Data to be calculated by the api)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "players.equipo",
            "description": "<p>Team</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n     {\n         \"nombre\": \"Juan Perez\",\n         \"goles_minimos\": 15,\n         \"goles\": 10,\n         \"sueldo\": 50000,\n         \"bono\": 25000,\n         \"sueldo_completo\": 67832.5,\n         \"equipo\": \"rojo\"\n     },\n     {\n         \"nombre\": \"EL Cuauh\",\n         \"goles_minimos\": 20,\n         \"goles\": 30,\n         \"sueldo\": 100000,\n         \"bono\": 30000,\n         \"sueldo_completo\": 130000,\n         \"equipo\": \"azul\"\n     },\n     {\n         \"nombre\": \"Cosme Fulanito\",\n         \"goles_minimos\": 5,\n         \"goles\": 7,\n         \"sueldo\": 20000,\n         \"bono\": 10000,\n         \"sueldo_completo\": 30000,\n         \"equipo\": \"azul\"\n     },\n     {\n         \"nombre\": \"El Rulo\",\n         \"goles_minimos\": 10,\n         \"goles\": 9,\n         \"sueldo\": 30000,\n         \"bono\": 15000,\n         \"sueldo_completo\": 42450,\n         \"equipo\": \"rojo\"\n     }\n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "JsonEmpty",
            "description": "<p>No data to process</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "SchemaErrors",
            "description": "<p>The errors related to the structure of the json are concentrated, as well as the type of data that must be sent in each key. See SchemaErrors tab.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "UnknowLevel",
            "description": "<p>This error occurs when the player level is not in the levels json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "JSONEmpty:",
          "content": "HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"No data to process\"\n   }",
          "type": "json"
        },
        {
          "title": "SchemaErrors:",
          "content": "HTTP/1.1 400 Bad Request\n    {\n         \"field\": \"goles\",\n         \"message\": \"should be >= 0\"\n     }",
          "type": "Json"
        },
        {
          "title": "UnknowLevel:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n       \"field\": \"nivel\",\n       \"message\": \"unknown levels were found\"\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "service_salary/salary_controller.js",
    "groupTitle": "Salary"
  }
] });
