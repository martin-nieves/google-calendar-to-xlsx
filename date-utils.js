
module.exports = {
    /**
     * Current Date with MIN possible time
     */
    minTimeCurrentDate: function () {
        var timeMin = new Date();
        timeMin.setHours(0, 0, 0, 0);
        return timeMin;
    },
    /**
     * Current Date with MAX possible time
     */
    maxTimeCurrentDate: function () {
        var timeMax = new Date();
        timeMax.setHours(23, 59, 59, 59);
        return timeMax;
    }
}
