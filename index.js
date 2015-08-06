/// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/


var Kitten = function() {

};

Kitten.prototype.setName = function(name) {
    this.name = name;
    return this;
};
// this is  a test

Kitten.prototype.uppercaseName = function() {
    this.name = this.name.toUpperCase();
    return this;
};

var j = function () {
  var j = "";
};


Kitten.prototype.getName = function() {
    return this.name;
};

var charlie = new Kitten();
console.log('The cats name is : ' + charlie.setName('david').uppercaseName().getName());


var reversename = function(name) {
    return name.split('').reverse().join('');
};

var mynamespace = {

    getName: function() {
        return this.name
    },
    setName: function(name) {
        this.name = name;
    },
    obtainName: function(callback) {
        return callback(this.name);
    }
};

var df = mynamespace;

df.setName('alex');
console.log(df.getName());
console.log(df.obtainName(reversename));






var mortekai = {
    test: function(mget) {
        console.log('+++++++');
        var mm = {
            get: mget.bind(mm)
        };

        return mm;
    }
};

var vvv = function dddd() {
    console.log(this.x);
};

console.log(mortekai);
console.log(mortekai.test(vvv));
console.log(mortekai.test(vvv));



var example = function() {
    console.log('a');
    return {
        add: function() {
            console.log('c');
        },
        subtract: function() {
            console.log('d');
        }
    };
};

example().add();
example().subtract();



var obj = {
    add: function() {
        console.log('CC');
    },
    subtract: function() {
        console.log('DD');
    }

};

obj.add();
obj.subtract();
//console.log(obj.subtract());



var tableModule = require('./table');

var x = 5;
var addX = function(value) {
    return value + x;
};

var subtract = function(value, v1) {
    return value - v1;
};

//module.exports.x = x;
module.exports.addX = addX;
module.exports.subtract = subtract;

var myTable = new tableModule('myspecialTable');
console.log(myTable.getTableId());

//// v5 21:48 29/07/2015

'use strict';

var pager = function() {

    var currentPageIndex = 1,
        maxRecords = 30,
        recordsPerPage = 10,
        maxPageLinks = 5,
        includeNextPrevious = true,
        indicatorBetweenPages = ' ',
        previousPageStr = '< Previous ',
        nextPageStr = ' Next >',
        moreContentPlaceholder = '...';

    var api = {};
    
    var shouldAddPrevNextLinks = function(potatoes) {
        return includeNextPrevious;
    };

    var addNextLink = function(currentPageIndex, upperLimit) {
        return (shouldAddPrevNextLinks() && ((currentPageIndex + 1) < upperLimit)) ? nextPageStr : '';
    };

    var addPreviousLink = function(lowLimit) {
        return (shouldAddPrevNextLinks() && (lowLimit > 1)) ? previousPageStr : '';
    };

    var shouldAddTrailingDots = function(upLimit, totPageIndexes) {
        return totPageIndexes > upLimit ? true : false; //
    };

    var addTrailingDotsPlaceholder = function(upLimit, totPageIndexes) {
        return shouldAddTrailingDots(upLimit, totPageIndexes) ? moreContentPlaceholder : '';
    };

    var generatePageLinks = function(loopIndex, selectedCurrentPage) {

        var strPageIndex = loopIndex == selectedCurrentPage ? '[' + loopIndex + ']' : loopIndex;

        return strPageIndex + indicatorBetweenPages;
    };

    var optionsUsed = function() {

        return 'currentPageIndex :' + currentPageIndex + ', maxRecords :' + maxRecords + ', recordsPerPage :' + recordsPerPage;

    };

    var totalNumberOfPageIndexes = function(maximumRecords, recordstoShowPerPage) {
        return Math.ceil(maximumRecords / recordstoShowPerPage);
    };

    api.setCurrentPageIndex = function(startIndex) {

        currentPageIndex = startIndex;

        if (currentPageIndex < 1) currentPageIndex = 1;
    };

    api.setRecordsPerPage = function(recordsToDisplayPerPage) {
        recordsPerPage = recordsToDisplayPerPage;
    };

    api.setTotalRecords = function(totalRecords) {
        maxRecords = totalRecords;
    };

    api.pageLinksToDisplay = function(maxPageLinksDisplayed) {
        maxPageLinks = maxPageLinksDisplayed || maxPageLinks;
    };

    api.showComplications = function(showNextPrev) {
        includeNextPrevious = showNextPrev;
    };

    api.render = function() {

        var totalPages = totalNumberOfPageIndexes(maxRecords , recordsPerPage);

        var currentPage = lowerLimit = upperLimit = Math.min(currentPageIndex, totalPages);

        var content = '';

        var b = 1;

         while (lowerLimit > 1 && b < maxPageLinks && b < totalPages)
        {
                lowerLimit--;
                b++;   //dsa  dsa
        }


        while (b < maxPageLinks && upperLimit < totalPages)
        {
            upperLimit++;
            b++;
        }

        // for (var b = 1; b < maxPageLinks && b < totalPages;) {
        //     if (lowerLimit > 1) {
        //         lowerLimit--;
        //                     console.log('<-->' + lowerLimit);
        //         b++;
        //     }
        //     if (b < maxPageLinks && upperLimit < totalPages) {
        //         upperLimit++;
        //         b++;
        //     }
        // }

        content += addPreviousLink(lowerLimit);

        for (var i = lowerLimit; i <= upperLimit; i++) {

            content += generatePageLinks(i, currentPageIndex);
        }

        try {
            document.getElementById('container').innerHTML = content;
        } catch (err) {
            // do nothing
        }

        content += addTrailingDotsPlaceholder(upperLimit, totalPages);

        content += addNextLink(currentPageIndex, upperLimit);

        console.log(optionsUsed());
        console.log(content);
        console.log('-------------------------------');

    };

    return api;

};

var recordsPerPage = 10;
var maxrecords = 68;

var myPager = new pager();
myPager.showComplications(true);
myPager.setCurrentPageIndex(1);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();

var myPager = new pager();
myPager.setCurrentPageIndex(2);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();

var myPager = new pager();
myPager.setCurrentPageIndex(3);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();

var myPager = new pager();
myPager.setCurrentPageIndex(4);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();

var myPager = new pager();
myPager.setCurrentPageIndex(5);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();

var myPager = new pager();
myPager.setCurrentPageIndex(6);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();

var myPager = new pager();
myPager.setCurrentPageIndex(7);
myPager.setRecordsPerPage(recordsPerPage);
myPager.setTotalRecords(maxrecords);
myPager.render();
