import * as Blockly from 'blockly/core';

var blocks = [
  {
    "type": "SpecificClearingPolicy",
    "message0": "Clear table of specific objects %1 Name your policy: %2 %3 Actions %4 Conditions %5 Objects %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "POLICYNAME",
        "text": "<name>"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "actions"
      },
      {
        "type": "input_statement",
        "name": "conditions"
      },
      {
        "type": "input_statement",
        "name": "objects"
      }
    ],
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "ClearingPolicy",
    "message0": "Clearing Policy %1 Name your policy: %2 %3 Actions %4 Conditions %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "POLICYNAME",
        "text": "<name>"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "actions"
      },
      {
        "type": "input_statement",
        "name": "conditions"
      }
    ],
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "CleaningPolicy",
    "message0": "Cleaning Policy %1 Name your policy: %2 %3 Actions %4 Conditions %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "POLICYNAME",
        "text": "<name>"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "Actions"
      },
      {
        "type": "input_statement",
        "name": "Conditions"
      },
    ],
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "objectpolicy",
    "message0": "Policy for object handling %1 Name your policy %2 %3 %4 Objects to be handled %5 Handling %6",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "POLICYNAME",
        "text": "<name>"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "objects"
      },
      {
        "type": "input_statement",
        "name": "handling"
      }
    ],
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "plate",
    "message0": "Plate",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "napkin",
    "message0": "Napkin",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "utensil",
    "message0": "Utensil",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "glass",
    "message0": "Glass",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "bottle",
    "message0": "Bottle",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "can",
    "message0": "Can",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "cup",
    "message0": "Cup",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "allobjects",
    "message0": "Clear All Objects",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "go to",
    "message0": "Go to",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "clean",
    "message0": "Clean",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "clear",
    "message0": "Clear",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "clear object",
    "message0": "Clear Object",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "clear and clean",
    "message0": "Clear and Clean",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "scan",
    "message0": "Scan",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "start",
    "message0": "Start",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "stop",
    "message0": "Stop",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "no-op",
    "message0": "No-op",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "charge",
    "message0": "Charge",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "time start",
    "message0": "Time start %1",
    "args0": [
      {
        "type": "field_input",
        "name": "startTime",
        "text": "00:00"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "people count",
    "message0": "Start when %1 has sat at the table",
    "args0": [
      {
        "type": "field_input",
        "name": "peopleCount",
        "text": "0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "object count",
    "message0": "Start when %1 objects are on the table",
    "args0": [
      {
        "type": "field_input",
        "name": "objectCount",
        "text": "0"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "policyOnCompletion",
    "message0": "On completion %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "policyOnCompletion",
        "options": [
          [
            "Return to charger",
            "Return to charger"
          ],
          [
            "Go to next task",
            "Go to next task"
          ],
          [
            "Idle",
            "Idle"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 260,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "slow",
    "message0": "Slow",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "careful",
    "message0": "Careful",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "normal",
    "message0": "Normal",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },

]

for (var Block in blocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function () {
        this.jsonInit(json);
      }
    };
  }
  makeBlock(blocks[Block]);
}