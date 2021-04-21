const textUtils = require('./text.utils');

class TimeUtils {

    constructor() { }

    getCurrentDate() {
        return new Date();
    }

    getFullDateNoSpaces() {
        const date = this.getCurrentDate();
        return `${[this.getDay(date), this.getMonth(date), this.getYear(date)].join('')}_${[this.getHours(date), this.getMinutes(date), this.getSeconds(date)].join('')}`;
    }

    getDateNoSpaces() {
        const date = this.getCurrentDate();
        return [this.getDay(date), this.getMonth(date), this.getYear(date)].join('');
    }

    getSeconds(date) {
        return textUtils.addLeadingZero(date.getSeconds());
    }

    getMinutes(date) {
        return textUtils.addLeadingZero(date.getMinutes());
    }

    getHours(date) {
        return textUtils.addLeadingZero(date.getHours());
    }

    getDay(date) {
        return textUtils.addLeadingZero(date.getDate());
    }

    getMonth(date) {
        return textUtils.addLeadingZero(date.getMonth() + 1);
    }

    getYear(date) {
        return date.getFullYear();
    }
}

module.exports = new TimeUtils();