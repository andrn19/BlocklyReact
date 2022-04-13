import * as Blockly from 'blockly/core'

var JSONGenerator = new Blockly.Generator("JSON");

JSONGenerator.ORDER_ATOMIC = 0;
JSONGenerator.ORDER_NONE = 0;

JSONGenerator.finish = function (code) {
    return code;
};

JSONGenerator.scrub_ = function (block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = JSONGenerator.blockToCode(nextBlock);
    return code + nextCode;
};

JSONGenerator['policy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var statements_scheduleStart = JSONGenerator.statementToCode(block, 'scheduleStart');
    var statements_actions = JSONGenerator.statementToCode(block, 'actions');
    var code = '{\n "policyOn": "",\n "policyIn": "",\n' + statements_scheduleStart + ' "policyOnCompletion": "",\n "policyHolder": "",\n "conditions": [\n   {\n   "name": "' + text_policyname + '",\n   "condition":"",\n   "entities": "",\n ' + statements_actions + '   }\n  ] \n }';
    return code;
};

JSONGenerator["schedulestart"] = function (block) {
    var statements_scheduleStart = JSONGenerator.statementToCode(block, 'scheduleStart');
    var code = '"scheduleStart": "' + statements_scheduleStart + '",\n';
    return code;
};

JSONGenerator["actions"] = function (block) {
    var statements_actions = JSONGenerator.statementToCode(block, 'actions');
    var code = '"action": "[' + statements_actions + ']"\n';
    return code;
};

JSONGenerator["goto"] = function (block) {
    var code = 'goto';
    return code;
};

export default JSONGenerator;