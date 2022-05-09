import * as Blockly from 'blockly/core'


const checkMultiCondition = (statements_condition) => {
    if (statements_condition.includes('},{')) {
        statements_condition = '{"and": [' + statements_condition.slice(0, -1) + ']}'
    }
    if (statements_condition === "") {
        statements_condition = '""'
    }
    return statements_condition
}

const getVars = (statements_condition, usedVars) => {
    if (statements_condition.includes('time')) {
        usedVars = '{"time": {"property": "time"}},' + usedVars
    }
    return usedVars
}

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
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions')
    var statements_objects = JSONGenerator.statementToCode(block, 'objects');
    const object_array = statements_objects.split('},')
    for (let ele of object_array) {
        if (ele.includes("Plate")) {
            usedVars = usedVars + '{"plateType" : {"value": "Plate"}},{"plate" : {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "plate"}, {"var": "plateType"}]},'
        }
        else if (ele.includes("Napkin")) {
            usedVars = usedVars + '{"napkinType" : {"value": "Napkin"}},{"napkin" : {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "napkin"}, {"var": "napkinType"}]},'
        }
        else if (ele.includes("Utensil")) {
            usedVars = usedVars + '{"utensilType" : {"value": "Utensil"}},{"utensil" : {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "utensil"}, {"var": "utensilType"}]},'
        }
        else if (ele.includes('Glass')) {
            usedVars = usedVars + '{"glassType" : {"value": "Glass"}},{"glass" : {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "glass"}, {"var": "glassType"}]},'
        }
        else if (ele.includes('Bottle')) {
            usedVars = usedVars + '{"bottleType" : {"value": "Bottle"}},{"bottle" : {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "bottle"}, {"var": "bottleType"}]},'
        }
        else if (ele.includes('Can')) {
            usedVars = usedVars + '{"canType" : {"value": "Can"}},{"can" : {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "can"}, {"var": "canType"}]},'
        }
        else if (ele.includes('Cup')) {
            usedVars = usedVars + '{"cupType": {"value": "Cup"}},{"cup": {"property": "anchorOf", "@type": "SensedEntity", "name": ""}},'
            statements_condition = statements_condition + '{"==": [{"var": "cup"}, {"var": "cupType"}]},'
        }
    }
    statements_condition = checkMultiCondition(statements_condition)
    usedVars = getVars(statements_condition, usedVars)
    if(statements_condition.endsWith(",")){
        statements_condition = statements_condition.slice(2, -1)
    }
    // var statements_actions = JSONGenerator.statementToCode(block, 'actions').slice(2, -1).replaceAll(',', ' | '); will be used if multiple actions can be used
    var code = '{ "@type": "ClearingPolicy", "name": "' + text_policyname + '", "description": "", "enabled": "false", "condition": ' + statements_condition + ', "vars": [' + usedVars.slice(0, -1) + '], "action": "clear", "policyOn": [] }';
    return code;
};

JSONGenerator['ClearingPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var usedVars = '';
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions').slice(2, -1);
    statements_condition = checkMultiCondition(statements_condition)
    usedVars = getVars(statements_condition, usedVars)
    // var statements_actions = JSONGenerator.statementToCode(block, 'actions').slice(2, -1).replaceAll(',', ' | ');
    var code = '{ "@type": "ClearingPolicy", "name": "' + text_policyname + '", "description": "", "enabled": "false", "condition": ' + statements_condition + ', "vars": [' + usedVars.slice(0, -1) + '], "action": "clear", "policyOn": [] }';
    return code;
};

JSONGenerator['CleaningPolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var usedVars = '';
    var statements_condition = JSONGenerator.statementToCode(block, 'conditions').slice(2, -1);
    statements_condition = checkMultiCondition(statements_condition)
    usedVars = getVars(statements_condition, usedVars)
    // var statements_actions = JSONGenerator.statementToCode(block, 'actions').slice(2, -1).replaceAll(',', ' | ');
    var code = '{ "@type": "CleaningPolicy", "name": "' + text_policyname + '", "description": "", "enabled": "false", "condition":' + statements_condition + ', "vars": [' + usedVars.slice(0, -1) + '], "action": "clean", "policyOn": [] }';
    return code;
};

JSONGenerator['objectpolicy'] = function (block) {
    var text_policyname = block.getFieldValue('POLICYNAME');
    var statements_objects = JSONGenerator.statementToCode(block, 'objects').slice(2, -2);
    var statements_handling = JSONGenerator.statementToCode(block, 'handling').slice(2, -1).replaceAll(',', ' | ');
    var code = '{ "@type": "ClearingPolicy", "name": "' + text_policyname + '", "description": "", "enabled": "flase", "actions": "' + statements_handling + '", "policyOn": [' + statements_objects + '] }';
    return code;
};

/* Table Objects */

// JSONGenerator["allobjects"] = function () {
//     var code = 'allobjects';
//     return code;
// };

JSONGenerator["plate"] = function () {
    var code = '{ "@type": "Plate", "name": "plate1" },';
    return code;
};

JSONGenerator["napkin"] = function () {
    var code = '{ "@type": "Napkin", "name": "napkin1" },';
    return code;
};

JSONGenerator["utensil"] = function () {
    var code = '{ "@type": "Utensil", "name": "utensil1" },';
    return code;
};

JSONGenerator["glass"] = function () {
    var code = '{ "@type": "Glass", "name": "glass1" },';
    return code;
};

JSONGenerator["bottle"] = function () {
    var code = '{ "@type": "Bottle", "name": "bottle1" },';
    return code;
};

JSONGenerator["can"] = function () {
    var code = '{ "@type": "Can", "name": "can1" },';
    return code;
};

JSONGenerator["cup"] = function () {
    var code = '{ "@type": "Cup", "name": "cup1" },';
    return code;
};

/* Conditions */

JSONGenerator["time start"] = function (block) {
    var text_startTime = block.getFieldValue('startTime');
    var code = '{"==": [{"var": "time"}, "' + text_startTime + '"]},';
    return code;
};

// JSONGenerator["timebefore"] = function (block) {
//     var text_startTime = block.getFieldValue('startTime');
//     var code = '{"<": [{"var": "time"}, '+text_startTime+']},';
//     return code;
// };

// JSONGenerator["timeafter"] = function (block) {
//     var text_startTime = block.getFieldValue('startTime');
//     var code = '{">": [{"var": "time"}, '+text_startTime+']},';
//     return code;
// };

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
    var code = 'slow,';
    return code;
};

JSONGenerator["careful"] = function () {
    var code = 'careful,';
    return code;
};

JSONGenerator["normal"] = function () {
    var code = 'normal,';
    return code;
};

export default JSONGenerator;