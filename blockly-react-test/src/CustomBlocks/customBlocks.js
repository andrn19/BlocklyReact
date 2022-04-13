import * as Blockly from 'blockly/core';

var blocks = [
    {
        "type": "policy",
        "message0": "Cleaning Policy %1 Give it a name %2 %3 The name will be used for future refrences %4 Scheduling %5 Actions %6",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_input",
                "name": "POLICYNAME",
                "text": "Clean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "scheduleStart",
            },
            {
                "type": "input_statement",
                "name": "actions",
            }
        ],
        "colour": 120,
        "tooltip": "",
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
      }
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