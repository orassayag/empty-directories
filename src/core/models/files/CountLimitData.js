class CountLimitData {

	constructor(settings) {
		// Set the parameters from the settings file.
		const { MILLISECONDS_END_DELAY_COUNT } = settings;
		this.millisecondsEndDelayCount = MILLISECONDS_END_DELAY_COUNT;
	}
}

module.exports = CountLimitData;