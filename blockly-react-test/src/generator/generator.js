import * as Blockly from 'blockly/core'

var JSONGenerator = new Blockly.Generator("JSON");

JSONGenerator.finish = function (code) {
    return code;
};

JSONGenerator.scrub_ = function (block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = JSONGenerator.blockToCode(nextBlock);
    return code + nextCode;
};

JSONGenerator['SpecificClearingPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var usedVars = '';
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions').slice(2, -1);
    if (statements_condition.includes('},{')) {
        statements_condition = '{"and": [\n' + statements_condition + '\n]}'
    }
    if (statements_condition.includes('time')){
        usedVars = '"time": {"property": "time"}'
    }
    var statements_actions = JSONGenerator.statementToCode(block, 'actions').slice(2, -1).replaceAll(',', ' | ');
    var statements_objects = JSONGenerator.statementToCode(block, 'objects');
    var code = '{\n "@type": "ClearingPolicy",\n "name": "' + text_policyname + '",\n "description": "",\n "enabled": "true",\n "condition": ' + statements_condition + ',\n "vars": [' + usedVars + '],\n "action": "' + statements_actions + '",\n "policyOn": []\n }';
    return code;
};

JSONGenerator['ClearingPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var usedVars = '';
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions').slice(2, -1);
    if (statements_condition.includes('},{')) {
        statements_condition = '{"and": [\n' + statements_condition + '\n]}'
    }
    if (statements_condition.includes('time')){
        usedVars = '"time": {"property": "time"}'
    }
    var statements_actions = JSONGenerator.statementToCode(block, 'actions').slice(2, -1).replaceAll(',', ' | ');
    var code = '{\n "@type": "ClearingPolicy",\n "name": "' + text_policyname + '",\n "description": "",\n "enabled": "true",\n "condition": ' + statements_condition + ',\n "vars": [' + usedVars + '],\n "action": "' + statements_actions + '",\n "policyOn": []\n }';
    return code;
};

JSONGenerator['CleaningPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var usedVars = '';
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions').slice(2, -1);
    if (statements_condition.includes('},{')) {
        statements_condition = '{"and": [\n' + statements_condition + '\n]}'
    }
    if (statements_condition.includes('time')){
        usedVars = '"time": {"property": "time"}'
    }
    var statements_actions = JSONGenerator.statementToCode(block, 'actions').slice(2, -1).replaceAll(',', ' | ');
    var code = '{\n "@type": "CleaningPolicy",\n "name": "' + text_policyname + '",\n "description": "",\n "enabled": "true",\n "condition": "' + statements_condition + '",\n "vars": [' + usedVars + '],\n "action": "' + statements_actions + '",\n "policyOn": []\n }';
    return code;
};

JSONGenerator['objectpolicy'] = function(block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var statements_objects = JSONGenerator.statementToCode(block, 'objects').slice(2, -2);
    var statements_handling = JSONGenerator.statementToCode(block, 'handling'); //????
    var code = '{\n "@type": "ClearingPolicy",\n "name": "' + text_policyname + '",\n "description": "",\n "enabled": "true",\n "policyOn": [' + statements_objects + ']\n }';
    return code;
};

/* Table Objects */

JSONGenerator["allobjects"] = function () {
    var code = 'allobjects';
    return code;
};

JSONGenerator["plate"] = function () {
    var code = '{\n "@type": "Plate",\n "name": "plate1" \n},\n';
    return code;
};

JSONGenerator["napkin"] = function () {
    var code = '{\n "@type": "Napkin",\n "name": "napkin1" \n},\n';
    return code;
};

JSONGenerator["utensil"] = function () {
    var code = '{\n "@type": "Utensil",\n "name": "utensil1" \n},\n';
    return code;
};

JSONGenerator["glass"] = function () {
    var code = '{\n "@type": "Glass",\n "name": "glass1" \n},\n';
    return code;
};

JSONGenerator["bottle"] = function () {
    var code = '{\n "@type": "Bottle",\n "name": "bottle1" \n},\n';
    return code;
};

JSONGenerator["can"] = function () {
    var code = '{\n "@type": "Can",\n "name": "can" \n},\n';
    return code;
};

JSONGenerator["cup"] = function () {
    var code = '{\n "@type": "Cup",\n "name": "cup1" \n},\n';
    return code;
};

/* Conditions */

JSONGenerator["time start"] = function (block) {
    var text_startTime = block.getFieldValue('startTime');
    var code = '{"=": [{"var": "time"}, '+text_startTime+']},';
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

JSONGenerator["go to"] = function () {
    var code = 'goto,';
    return code;
};

JSONGenerator["clean"] = function () {
    var code = 'clean,';
    return code;
};

JSONGenerator["clear"] = function () {
    var code = 'clear,';
    return code;
};

JSONGenerator["clear and clean"] = function () {
    var code = 'clear-n-clean,';
    return code;
};

// JSONGenerator["clear object"] = function (block) {
//     var code = 'clearobject';
//     return code;
// };

JSONGenerator["scan"] = function () {
    var code = 'scan,';
    return code;
};

JSONGenerator["start"] = function () {
    var code = 'start,';
    return code;
};

JSONGenerator["stop"] = function () {
    var code = 'stop,';
    return code;
};

JSONGenerator["no-op"] = function () {
    var code = 'no-op,';
    return code;
};

JSONGenerator["charge"] = function () {
    var code = 'charge,';
    return code;
};

/* Handling */

JSONGenerator["slow"] = function () {
    var code = 'slow';
    return code;
};

JSONGenerator["careful"] = function () {
    var code = 'careful';
    return code;
};

JSONGenerator["normal"] = function () {
    var code = 'normal';
    return code;
};

export default JSONGenerator;