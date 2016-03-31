/**
 * A module that gets the start and end date of a quarter
 * @module dominicbartl/quarterrange
 */

/**
 * @param {Number} q - The index of the quarter (0, 1, 2, 3)
 * @param {Number} [year] - The year
 * @returns {{from: Date, to: Date}}
 */
module.exports = function (q, year) {
    // Make sure it's an integer
    q = parseInt(q);
    q = q % 4;

    var dateStart = new Date();
    var dateEnd = new Date();

    if (year) {
        dateStart.setFullYear(year);
        dateEnd.setFullYear(year);
    }
    dateStart.setDate(1);
    dateStart.setMonth((q * 3));
    dateStart.setUTCHours(0, 0, 0, 0);

    dateEnd.setDate(15);
    dateEnd.setMonth(((q + 1) * 3));
    dateEnd.setDate(0);
    dateEnd.setUTCHours(23, 59, 59, 0);

    return {
        from: dateStart,
        to: dateEnd
    };
}