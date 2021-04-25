const { LogDataModel } = require('../../core/models');
const pathService = require('./path.service');
const { fileUtils, textUtils, logUtils } = require('../../utils');

class LogService {

	constructor() {
		// ===PATH=== //
		this.logDataModel = null;
		this.baseSessionPath = null;
		this.distFileName = null;
	}

	async initiate(settings) {
		this.logDataModel = new LogDataModel(settings);
		await this.initiateDirectories();
	}

	async initiateDirectories() {
		// ===PATH=== //
		this.baseSessionPath = pathService.pathDataModel.distPath;
		fileUtils.createDirectory(this.baseSessionPath);
		await fileUtils.emptyDirectory(this.baseSessionPath);
		this.distFileName = `${this.baseSessionPath}\\${this.logDataModel.distFileName}.txt`;
	}

	async logProgress(path) {
		await logUtils.logProgress(path);
	}

	async logPaths(pathsList) {
		let message = '';
		for (let i = 0; i < pathsList.length; i++) {
			message += `${pathsList[i]}\n`;
		}
		await fileUtils.appendFile({
			targetPath: this.distFileName,
			message: message
		});
	}

	createLineTemplate(title, value) {
		return textUtils.addBreakLine(`${title}: ${value}`);
	}

	createConfirmSettingsTemplate(settings) {
		const parameters = ['SCAN_PATH', 'DIST_FILE_NAME'];
		let settingsText = Object.keys(settings).filter(s => parameters.indexOf(s) > -1)
			.map(k => this.createLineTemplate(k, settings[k])).join('');
		settingsText = textUtils.removeLastCharacters({
			value: settingsText,
			charactersCount: 1
		});
		return `${textUtils.setLogStatus('IMPORTANT SETTINGS')}
${settingsText}
========================
OK to run? (y = yes)`;
	}
}

module.exports = new LogService();