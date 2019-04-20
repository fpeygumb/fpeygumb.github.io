//app.js
// Define a new module for our app. The array holds names of dependencies if any.

var app = angular.module("searchApp", []);
// Create the search filter
app.filter('searchFor', function(){
// All filters must return a function. The first parameter
// is the data that is to be filtered, and the second is an
// argument that may be passed with a colon (searchFor:searchString)
return function(dataArr, searchString){
if(!searchString){
return dataArr;
}
var result = [];
searchString = searchString.toLowerCase();
// Using the forEach helper method to loop through the array
angular.forEach(dataArr, function(item){
if(item.name.toLowerCase().indexOf(searchString) !== -1){
result.push(item);
}
});
return result;
};
});
// The controller
function searchController($scope){
// The data model. These items would normally be requested via AJAX,
// but are hardcoded here for simplicity. See the next example for
// tips on using AJAX.
$scope.movies = [
{name:"The Godfather",releaseYr:"1972"},
{name:"Inception",releaseYr:"2010"},
{name:"Titanic",releaseYr:"1997"},
{name:"Thor:Ragnarok",releaseYr:"2017"},
{name:"Forest Gump",releaseYr:"1994"},
{name:"Star Wars",releaseYr:"1977"},
{name:"Justice League",releaseYr:"2017"},
{name:"The Dark Knight",releaseYr:"2008"},
{name:"Avatar",releaseYr:"2009"},
{name:"The Avengers",releaseYr:"2012"}
];}

var app = angular.module("wikiApp", []);

app.controller("wikiController", ["$scope", "searchResults", function($scope, searchResults) {
    $scope.reset = function() {
        if($scope.content) $scope.content = '';
        if($scope.results) $scope.results = '';
    };

    $scope.check = function() {
        if ($scope.content === "" || !$scope.content) return false;
        return true;
    }
    
    $scope.getResults = function(){
        if($scope.check()) {
            searchResults.get($scope.content).then(function(data){
                $scope.results = data.data.query.pages;
                for(var page in $scope.results){
                    $scope.results[page].link = 'https://en.wikipedia.org/wiki/' + $scope.results[page].title; 
                }
            });
        }
    };
}]);

app.factory("searchResults", function($http) {
    var config = {
        params: {
            format: "json",
            action: "query",
            prop: "extracts",
            exchars: "140",
            exlimit: "10",
            exintro: "",
            explaintext: "",
            rawcontinue: "",
            generator: "search",
            gsrlimit: "10",
            callback: "JSON_CALLBACK"
        }
    };
    var url = "https://en.wikipedia.org/w/api.php?";
    
    var results = {
        get: function(data) {
            config.params.gsrsearch = data;
            return $http.jsonp(url,config).then(function(rq){
                console.log(rq);
                return rq;
            });
        }
    };

    return results;
});

app.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});




