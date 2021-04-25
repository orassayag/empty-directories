const settings = require('../settings/settings');
const { StatusEnum } = require('../core/enums');
const { applicationService, confirmationService, countLimitService, logService,
    pathService, scanService } = require('../services');
const globalUtils = require('../utils/files/global.utils');
const { logUtils, systemUtils, timeUtils } = require('../utils');

class ScanLogic {

    constructor() { }

    async run() {
        // Validate all settings are fit to the user needs.
        await this.confirm();
        // Initiate all the settings, configurations, services, etc...
        await this.initiate();
        // Start the scanning process.
        await this.startSession();
    }

    async initiate() {
        this.updateStatus('INITIATE THE SERVICES', StatusEnum.INITIATE);
        countLimitService.initiate(settings);
        applicationService.initiate(settings, StatusEnum.INITIATE);
        scanService.initiate();
        pathService.initiate(settings);
        await logService.initiate(settings);
    }

    async startSession() {
        // Initiate.
        this.updateStatus('SCAN DIRECTORIES', StatusEnum.SCAN);
        applicationService.applicationDataModel.startDateTime = timeUtils.getCurrentDate();
        await scanService.run();
        await this.exit(StatusEnum.FINISH);
    }

    async sleep() {
        await globalUtils.sleep(countLimitService.countLimitDataModel.millisecondsEndDelayCount);
    }

    // Let the user confirm all the IMPORTANT settings before the process starts.
    async confirm() {
        if (!await confirmationService.confirm(settings)) {
            await this.exit(StatusEnum.ABORT_BY_THE_USER);
        }
    }

    updateStatus(text, status) {
        logUtils.logStatus(text);
        if (applicationService.applicationDataModel) {
            applicationService.applicationDataModel.status = status;
        }
    }

    async exit(status) {
        if (applicationService.applicationDataModel) {
            applicationService.applicationDataModel.status = status;
            await this.sleep();
        }
        logUtils.logSpace();
        systemUtils.exit(status);
    }
}

module.exports = ScanLogic;