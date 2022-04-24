import * as Blockly from 'blockly/core';

var blocks = [
    {
        "type": "template",
        "message0": "Create New Policy %1 %2 %3 %4 Actions %5 Conditions %6 Handling %7 On object %8",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_label_serializable",
            "name": "NAME",
            "text": "Give it a name"
          },
          {
            "type": "field_input",
            "name": "NAME",
            "text": "<Name>"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "schedulestart",
        "message0": "schedule to start %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "scheduleStart"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
    },
    {
        "type": "actions",
        "message0": "Actions to be performed %1 %2",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "actions"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 270,
        "tooltip": "",
    },
    {
        "type": "goto",
        "message0": "Go To Table",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
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
            "name": "NAME",
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
            "name": "NAME",
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
            "name": "NAME",
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