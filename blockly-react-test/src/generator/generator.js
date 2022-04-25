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

JSONGenerator['ClearingPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions');
    var statements_actions = JSONGenerator.statementToCode(block, 'actions');
    var statements_objects = JSONGenerator.statementToCode(block, 'objects');
    var statements_handling = JSONGenerator.statementToCode(block, 'handling');
    var code = '{\n "@type": "ClearingPolicy",\n "name": "' + text_policyname + '",\n "description": "",\n "enabled": "",\n "condition": "' + statements_condition + '",\n "vars": "",\n "action": "' + statements_actions + '",\n "handling": "' + statements_handling + '",\n "policyOn": [\n {\n "@type": "' + statements_objects + '",\n "name": "",\n "desciption":""\n }\n ],\n "policyIn": {\n "@type": "",\n "name": "",\n "desciption":""\n }\n }';
    return code;
};

JSONGenerator['CleaningPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var statements_condition = JSONGenerator.statementToCode(block, 'condition');
    var statements_actions = JSONGenerator.statementToCode(block, 'actions');
    var code = '{\n "@type": "CleaningPolicy",\n "name": "' + text_policyname + '",\n "description": "",\n "enabled": "",\n "condition": "' + statements_condition + '",\n "vars": "",\n "action": "' + statements_actions + '",\n "handling": "",\n "policyOn": [\n {\n "@type": "",\n "name": "",\n "desciption":""\n }\n ],\n "policyIn": {\n "@type": "",\n "name": "",\n "desciption":""\n }\n }';
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

/* Table Objects */

JSONGenerator["allobjects"] = function (block) {
    var code = 'allobjects';
    return code;
};

JSONGenerator["plate"] = function (block) {
    var code = 'plate';
    return code;
};

JSONGenerator["napkin"] = function (block) {
    var code = 'napkin';
    return code;
};

JSONGenerator["utensil"] = function (block) {
    var code = 'utensil';
    return code;
};

JSONGenerator["glass"] = function (block) {
    var code = 'glass';
    return code;
};

JSONGenerator["bottle"] = function (block) {
    var code = 'bottle';
    return code;
};

JSONGenerator["can"] = function (block) {
    var code = 'can';
    return code;
};

JSONGenerator["cup"] = function (block) {
    var code = 'cup';
    return code;
};

/* Conditions */

JSONGenerator["time start"] = function (block) {
    var text_startTime = block.getFieldValue('startTime');
    var code = ''+text_startTime+',';
    return code;
};

JSONGenerator["people count"] = function (block) {
    var text_peopleCount = block.getFieldValue('peopleCount');
    var code = '' + text_peopleCount + ',';
    return code;
};

JSONGenerator["object count"] = function (block) {
    var text_objectCount = block.getFieldValue('objectCount');
    var code = '' + text_objectCount + ',';
    return code;
};

JSONGenerator["policyOnCompletion"] = function (block) {
    var statement_onCompletion = block.getFieldValue('policyOnCompletion');
    var code = '' + statement_onCompletion + ',';
    return code;
};

/* Actions */

JSONGenerator["go to"] = function (block) {
    var code = 'go to';
    return code;
};

JSONGenerator["clean"] = function (block) {
    var code = 'clean';
    return code;
};

JSONGenerator["clear"] = function (block) {
    var code = 'clear';
    return code;
};

JSONGenerator["clear object"] = function (block) {
    var code = 'clear object';
    return code;
};

JSONGenerator["scan"] = function (block) {
    var code = 'scan';
    return code;
};

JSONGenerator["start"] = function (block) {
    var code = 'start';
    return code;
};

JSONGenerator["stop"] = function (block) {
    var code = 'stop';
    return code;
};

JSONGenerator["no-op"] = function (block) {
    var code = 'no-op';
    return code;
};

JSONGenerator["charge"] = function (block) {
    var code = 'charge';
    return code;
};

/* Handling */

JSONGenerator["slow"] = function (block) {
    var code = 'slow';
    return code;
};

JSONGenerator["careful"] = function (block) {
    var code = 'careful';
    return code;
};

JSONGenerator["normal"] = function (block) {
    var code = 'normal';
    return code;
};

export default JSONGenerator;