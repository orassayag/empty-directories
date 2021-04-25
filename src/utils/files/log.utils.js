const globalUtils = require('./global.utils');
const textUtils = require('./text.utils');

class LogUtils {

    constructor() { }

    log(message) {
        console.log(message);
    }

    logStatus(status) {
        if (!status) {
            return '';
        }
        this.log(textUtils.setLogStatus(status));
    }

    clearLine() {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
    }

    async logProgress(path) {
        this.clearLine();
        process.stdout.write(`\r${textUtils.cutText({
            text: path,
            count: 150
        })}`);
        await globalUtils.sleep(100);
    }

    logSpace() {
        process.stdout.write('\n\r');
        this.clearLine();
    }
}

module.exports = new LogUtils();