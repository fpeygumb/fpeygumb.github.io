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
    {name:"world interest rates table"},		
    {name:"2008 beijing olympics"},		
    {name:"fast cars"},		
    {name:"clothing sizes"},		
    {name:"phases of the moon"},		
    {name:"usa population by state"},		
    {name:"prime ministers of england"},		
    {name:"ipod models"},		
    {name:"bittorrent clients"},		
    {name:"olympus digital slrs"},		
    {name:"composition of the sun"},		
    {name:"running shoes"},		
    {name:"fuel consumption"},		
    {name:"stock quote tables"},		
    {name:"top grossing movies"},		
    {name:"nutrition values"},		
    {name:"state capitals and largest cities in us"},		
    {name:"professional wrestlers"},		
    {name:"company income statements"},		
    {name:"dog breeds"},		
    {name:"ibanez guitars"},		
    {name:"used cellphones"},		
    {name:"world religions"},		
    {name:"stocks"},		
    {name:"academy awards"},		
    {name:"2008 olympic gold medal winners"},		
    {name:"currencies of different countries"},		
    {name:"science discoveries"},		
    {name:"pga leaderboard"},		
    {name:"pain medications"},		
    {name:"football clubs city"},		
    {name:"healthy food cost"},		
    {name:"capitals attractions"},		
    {name:"diseases mortality"},		
    {name:"cigarette brands market share"},		
    {name:"apples market share"},		
    {name:"healthy food nutritional value"},		
    {name:"hormones effects"},		
    {name:"household chemicals strength"},		
    {name:"lakes altitude"},		
    {name:"laptops cpu"},		
    {name:"asian countries currency"},		
    {name:"diseases risks"},		
    {name:"external drives capacity"},		
    {name:"baseball teams captain"},		
    {name:"maryland counties population"},		
    {name:"countries capital"},		
    {name:"diseases incidence"},		
    {name:"eu countries year joined"},		
    {name:"irish counties area"},		
    {name:"cereals nutritional value"},		
    {name:"erp systems price"},		
    {name:"cats life span"},		
    {name:"broadway musicals director"},		
    {name:"infections treatment"},		
    {name:"food type"},		
    {name:"board games number of players"},		
    {name:"google products reviews"},		
    {name:"constellations closest constellation"},		
    {name:"games age"}		
];}
