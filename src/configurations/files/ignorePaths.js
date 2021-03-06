/* cSpell:disable */
// It's highly not recommended to change the system paths.
// These paths are 'included' case, so if the path, for example, contains the word
// 'backups', and the word 'backups' is in this array, it will be ignored.
const ignorePaths = [
    // ===CUSTOM=== //
    '\\.git',
    '\\dist',
    '\\backups',
    '\\sources',
    '\\misc\\backups',
    '\\node_modules',
    // ===SYSTEM=== //
    'C:\\$WinREAgent',
    'C:\\Intel',
    'C:\\MSOCache',
    'C:\\PerfLogs',
    'C:\\Program Files',
    'C:\\Program Files (x86)',
    'C:\\ProgramData',
    'C:\\Users',
    'C:\\Windows'
];

module.exports = ignorePaths;