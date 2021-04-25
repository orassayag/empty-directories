const enumUtils = require('../enum.utils');

const ScriptTypeEnum = enumUtils.createEnum([
    ['BACKUP', 'backup'],
    ['SCAN', 'scan'],
    ['TEST', 'test']
]);

const StatusEnum = enumUtils.createEnum([
    ['INITIATE', 'INITIATE'],
    ['SCAN', 'SCAN'],
    ['ABORT_BY_THE_USER', 'ABORT BY THE USER'],
    ['FINISH', 'FINISH']
]);

module.exports = { ScriptTypeEnum, StatusEnum };