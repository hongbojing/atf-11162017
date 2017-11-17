(function() {
    'use strict';

    angular
        .module('myApp',['ngRoute'])
        .controller('AjaxController', AjaxController);

    /* dependency injection to ensure valid minified code */
    AjaxController.$inject = ['$window', '$scope', '$http'];

    function AjaxController($window,$scope, $http){
        var url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3caea7630a814ca097e0c284cbcef3b8";
        $http.get(url)
        .then(function(response) {
            $scope.displayData = response.data.articles;
            console.log(response.data);
        });
    }

})();
