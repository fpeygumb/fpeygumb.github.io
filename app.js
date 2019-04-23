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
{name:"world interest rates table",releaseYr:"1"},
{name:"2008 beijing olympics",releaseYr:"2"},
{name:"Titanic",releaseYr:"3"},
{name:"Thor:Ragnarok",releaseYr:"4"},
{name:"Forest Gump",releaseYr:"1994"},
{name:"Star Wars",releaseYr:"1977"},
{name:"Justice League",releaseYr:"2017"},
{name:"The Dark Knight",releaseYr:"2008"},
{name:"Avatar",releaseYr:"2009"},
{name:"The Avengers",releaseYr:"2012"}
];}
