/// https://quickleft.com/blog/creating-and-publishing-a-node-js-module/


var Kitten = function(){

};

Kitten.prototype.setName = function(name) {
	this.name = name;
	return this;
};

Kitten.prototype.uppercaseName = function() {
	this.name = this.name.toUpperCase();
	return this;
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

	getName : function() {
		return this.name
	},
	setName : function(name) {
		this.name = name;
	},
	obtainName : function (callback) {
		return callback(this.name);
	}
};

var df = mynamespace;

df.setName('alex');
console.log(df.getName());
console.log(df.obtainName(reversename));






var mortekai = {
	test: function(mget) {
		console.log('+++++++')
		var mm = { 
			get: mget.bind(mm)
		};
 
		return mm;
	}
};

var vvv = function dddd() {
	console.log( this.x);
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



var obj =  {
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

/////////////////////////////////////////

// v5 14:23 29/07/2015

var pager = function () {
    
    var currentPageIndex = 1,
        maxRecords = 30,
        recordsPerPage = 10, 
        maxPageLinks = 5,
        includeNextPrevious = true,
        indicatorBetweenPages = ' ',
        previousPageStr = '< Previous ',
        nextPageStr = ' Next >',
        moreContentPlaceholder = '...';
        
	var api = {}
    
    var logger = function(logItem) {
        
        var shouldLog = true;
        
        if (shouldLog) {
            console.log(logItem);
        };
    };
    
    /*
    var shouldCreateaPageIndex = function(i) {
        
        logger('shouldCreateaPageIndex ' + ' ' + (i * recordsPerPage) + ' ' + maxRecords);
        
        return (i * recordsPerPage) <= maxRecords ? true : false;
    };*/
    
    /*
    var upperPageLimit = function () {
        logger('upperPageLimit ' + (currentPageIndex + maxPageLinks));
        return currentPageIndex + maxPageLinks;
    };
    */

    var shouldAddPrevNextLinks = function() {
        return includeNextPrevious;
    };

    var addNextLink = function(currentPageIndex, recsPerPage) {
         return (shouldAddPrevNextLinks() && (currentPageIndex * recordsPerPage) < maxRecords) ? nextPageStr : ''
    };
    
    var addPreviousLink = function(currentPageIndex) {
        return (shouldAddPrevNextLinks() && (currentPageIndex > 1)) ? previousPageStr : '';
    };
    
    var addTrailingDotsPlaceholder = function (currPageIndex,totalPageIndexes, cappedTotalPageIndexes) {
        return totalPageIndexes > (cappedTotalPageIndexes + currPageIndex) ? moreContentPlaceholder : '';
    };
    
    var generatePageLinks = function(selectedCurrentPage, loopIndex) {

        var strPageIndex = loopIndex == selectedCurrentPage ? '[' + loopIndex + ']' : loopIndex;
        
        return strPageIndex + indicatorBetweenPages;
    };
    
    var ajustPageIndex = function (pIndex) {
        
        var pageSegmentsDisplayed = Math.min(1 + (maxRecords - (pIndex * recordsPerPage)) / recordsPerPage, maxPageLinks);

        var adjustedIndex = pIndex - (maxPageLinks - pageSegmentsDisplayed);
        
        logger('ajustPageIndex ' + pIndex + ' ' + pageSegmentsDisplayed + ' '  + adjustedIndex + ' ' + Math.max(adjustedIndex,1));
        
        return Math.max(adjustedIndex,1);
    };

    var optionsUsed = function() {

    	return 'currentPageIndex :' + currentPageIndex
    			+ ', maxRecords :' + maxRecords
    			+ ', recordsPerPage :' + recordsPerPage;

    }

    var totalNumberOfPageIndexes = function(maximumDataRecords ,resultstoShowPerPage) {
    	var total = Math.ceil(maximumDataRecords / resultstoShowPerPage);
    	logger('totalNumberOfPageIndexes ' + total);
    	return total;
    };

    var applyCapTotalNumberOfPageIndexes = function(totNumberPageIndex,cPageIndex,maxLinkstoDisplay) {

    	var difference = totNumberPageIndex - cPageIndex;

    	if (difference > maxLinkstoDisplay) {
    		return maxLinks;
    	};

    	return difference;

    };
    
    api.setCurrentPageIndex = function(startIndex) {
        
        currentPageIndex = startIndex || currentPageIndex;
        
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
        includeNextPrevious = showNextPrev ;
    };
     
	api.render = function () {
        
        var content = '';
        
       // currentPageIndex = ajustPageIndex(currentPageIndex);
        
        content += addPreviousLink(currentPageIndex);

        var totalPageIndexes = totalNumberOfPageIndexes(maxRecords ,recordsPerPage);

        var cappedTotalPageIndexes = applyCapTotalNumberOfPageIndexes(totalPageIndexes, currentPageIndex, maxPageLinks);

        var upperLimit = currentPageIndex + cappedTotalPageIndexes;
        
        for (var counter = currentPageIndex; counter < upperLimit; counter++) {
            
                content += generatePageLinks(currentPageIndex, counter);
            
        };
        
        content += addTrailingDotsPlaceholder(currentPageIndex, totalPageIndexes, cappedTotalPageIndexes);

        content += addNextLink(currentPageIndex,recordsPerPage);

		console.log('-------------------------------');
		console.log(content);
		console.log(optionsUsed());
	};

	return api;
    
};

var myPager = new pager();
myPager.showComplications(true);
myPager.setCurrentPageIndex(7);
myPager.setRecordsPerPage(10);
myPager.setTotalRecords(101);
myPager.render();

