
var app = angular.module('wikiApp', []);

app.controller('wikiCtrl', function($scope, $http){
    var vm =$scope;
    vm.searchTermArr=[];
    vm.headerInfo={
        project: "EDP: EB01",
        site: "Table Search from unstructured data"
    };

vm.randomLink= "https://en.wikipedia.org/wiki/Special:Random";

vm.searchWiki = function(){$http({
    url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+vm.searchTerm+'&format=json&callback=JSON_CALLBACK',
    method:'jsonp'

}).success(function(response){
    //Title
    vm.searchTermArr.push(response[1]);
    //Description
    vm.searchTermArr.push(response[2]);
    //Article Link
    vm.searchTermArr.push(response[3]);

});}


});
