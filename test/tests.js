describe('QuarterRange', function() {

    it('should get all quarters of current year', function() {

        /*
         01-01 - 31-03
         01-04 - 30-06
         01-07 - 30-09
         01-10 - 31-12
         */

        var year = new Date().getFullYear();
        var strings = [{
            from: year + '-01-01',
            to: year + '-03-31'
        },{
            from: year + '-04-01',
            to: year + '-06-30'
        },{
            from: year + '-07-01',
            to: year + '-09-30'
        },{
            from: year + '-10-01',
            to: year + '-12-31'
        }];

        for (var i = 0; i < strings.length; i++) {
            should(Utils.getQuarterRange(i)).eql(strings[i]);

            var intAsString = i + "";
            should(Utils.getQuarterRange(intAsString)).eql(strings[i]);
        }

    });

    it('should get all quarters of previous year', function() {

        /*
         01-01 - 31-03
         01-04 - 30-06
         01-07 - 30-09
         01-10 - 31-12
         */

        var year = new Date().getFullYear() - 1;
        var strings = [{
            from: year + '-01-01',
            to: year + '-03-31'
        },{
            from: year + '-04-01',
            to: year + '-06-30'
        },{
            from: year + '-07-01',
            to: year + '-09-30'
        },{
            from: year + '-10-01',
            to: year + '-12-31'
        }];

        for (var i = 0; i < strings.length; i++) {
            should(Utils.getQuarterRange(i, year)).eql(strings[i]);

            var intAsString = i + "";
            //noinspection JSCheckFunctionSignatures
            should(Utils.getQuarterRange(intAsString, year)).eql(strings[i]);
        }

    });

});