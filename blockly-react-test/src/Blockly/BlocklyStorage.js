import Blockly from 'blockly/core';


// const getRootBlock = (workspace) => {
//     var blocks = workspace.getTopBlocks(false);
//     for (var i = 0, block; block = blocks[i]; i++) {
//         if (block.type === 'ClearingPolicy' || 'ClearingPolicy') {
//             return block;
//         }
//     }
//     return null;
// };

// const getCurrentBlockType = () => {
//     var rootBlock = getRootBlock(workspace)
//     var blockType = rootBlock.getFieldValue()
// }


// const saveBlock = () => {
//     var blockType = getCurrentBlockType();

//     var xmlElement = Blockly.utils.xml.createElement('xml');
//     var block = getRootBlock(workspace);
//     xmlElement.appendChild(Blockly.Xml.blockToDomWithXY(block));

//     storage.addBlock(blockType, xmlElement)
// }

