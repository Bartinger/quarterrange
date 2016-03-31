var should = require('should');
var quarter = require('../index');

describe('QuarterRange', function() {

    it('should get all quarters of current year', function() {

        var year = new Date().getFullYear();

        var q1 = quarter(0);
        should(q1.from).eql(new Date(year + '-01-01T00:00:00'));
        should(q1.to).eql(new Date(year + '-03-31T23:59:59'));

        var q2 = quarter(1);
        should(q2.from).eql(new Date(year + '-04-01T00:00:00'));
        should(q2.to).eql(new Date(year + '-06-30T23:59:59'));

        var q3 = quarter(2);
        should(q3.from).eql(new Date(year + '-07-01T00:00:00'));
        should(q3.to).eql(new Date(year + '-09-30T23:59:59'));

        var q4 = quarter(3);
        should(q4.from).eql(new Date(year + '-10-01T00:00:00'));
        should(q4.to).eql(new Date(year + '-12-31T23:59:59'));

    });

    it('should get all quarters of previous year', function() {

        var year = new Date().getFullYear() - 1;

        var q1 = quarter(0, year);
        should(q1.from).eql(new Date(year + '-01-01T00:00:00'));
        should(q1.to).eql(new Date(year + '-03-31T23:59:59'));

        var q2 = quarter(1, year);
        should(q2.from).eql(new Date(year + '-04-01T00:00:00'));
        should(q2.to).eql(new Date(year + '-06-30T23:59:59'));

        var q3 = quarter(2, year);
        should(q3.from).eql(new Date(year + '-07-01T00:00:00'));
        should(q3.to).eql(new Date(year + '-09-30T23:59:59'));

        var q4 = quarter(3, year);
        should(q4.from).eql(new Date(year + '-10-01T00:00:00'));
        should(q4.to).eql(new Date(year + '-12-31T23:59:59'));

    });

    it('should pass quarter index as a string', function() {

        var year = new Date().getFullYear();

        var q1 = quarter('0', year);
        should(q1.from).eql(new Date(year + '-01-01T00:00:00'));
        should(q1.to).eql(new Date(year + '-03-31T23:59:59'));

    });

});