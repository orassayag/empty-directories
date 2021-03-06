const { timeUtils } = require('../../../utils');

class ApplicationDataModel {

	constructor(data) {
		// Set the parameters from the settings file.
		const { status } = data;
		this.status = status;
		this.startDateTime = null;
		this.time = null;
		this.logDateTime = timeUtils.getFullDateNoSpaces();
	}
}

module.exports = ApplicationDataModel;