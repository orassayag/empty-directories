const validationUtils = require('./validation.utils');

class TextUtils {

    constructor() {
        this.b = '===';
    }

    cutText(data) {
        const { text, count } = data;
        if (!text) {
            return '';
        }
        if (text.length > count) {
            return text.substring(0, count);
        }
        return text;
    }

    setLogStatus(status) {
        if (!status) {
            return '';
        }
        return `${this.b}${status}${this.b}`;
    }

    toLowerCase(text) {
        if (!text) {
            return '';
        }
        return text.toLowerCase();
    }

    removeAllCharacters(text, target) {
        if (!text) {
            return '';
        }
        return text.split(target).join('');
    }

    // This method adds leading 0 if needed.
    addLeadingZero(number) {
        if (!validationUtils.isValidNumber(number)) {
            return '';
        }
        return number < 10 ? `0${number}` : number;
    }

    getBackupName(data) {
        const { applicationName, date, title, index } = data;
        return `${applicationName}_${date}-${(index + 1)}${title ? `-${title}` : ''}`;
    }

    addBackslash(text) {
        if (!text) {
            return '';
        }
        return `${text}/`;
    }

    addBreakLine(text) {
        return `${text}\r\n`;
    }

    lowerCaseList(list) {
        if (!validationUtils.isExists(list)) {
            return list;
        }
        return list.map(i => this.toLowerCase(i));
    }

    removeLastCharacters(data) {
        const { value, charactersCount } = data;
        if (!value || !validationUtils.isValidNumber(charactersCount)) {
            return '';
        }
        return value.substring(0, value.length - charactersCount);
    }
}

module.exports = new TextUtils();