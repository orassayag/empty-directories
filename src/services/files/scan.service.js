const { ignorePaths } = require('../../configurations');
const logService = require('./log.service');
const pathService = require('./path.service');
const { fileUtils, textUtils, validationUtils } = require('../../utils');

class ScanService {

    constructor() {
        this.ignorePaths = null;
    }

    initiate() {
        this.ignorePaths = textUtils.lowerCaseList(ignorePaths);
    }

    async run() {
        const pathsList = await fileUtils.getFilesRecursive({
            directory: pathService.pathData.scanPath,
            ignorePaths: this.ignorePaths,
            logProgress: logService.logProgress
        });
        if (validationUtils.isExists(pathsList)) {
            await logService.logPaths(pathsList);
        }
    }
}

module.exports = new ScanService();