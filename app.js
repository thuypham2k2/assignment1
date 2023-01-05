let d = new Date();

let app = angular.module("myApp", ['ngRoute']);
// app.controller("firstController", firstController);
// function firstController($scope){
//     $scope.name = "Hello T2210E";
//     $scope.schoolName = "FPT Aptech"
// }
let products = [
    // { name: "Lenovo 4", price: Math.floor(Math.random() * 100) + 1, date: "2000-03-16", d  },
    // { name: "Lenovo 5", price: Math.floor(Math.random() * 100) + 1, date: "-12-18", d },
    // { name: "HP 9", price: Math.floor(Math.random() * 100) + 1, date: "2008-06-14",d },
    // { name: "Casio", price: Math.floor(Math.random() * 100) + 1, date: "2015-03-10",d },
    // { "name": "Oppo A7", "price": Math.floor(Math.random() * 100) + 1, "date": "2003-12-06",d },
    // { "name": "Defy the limits", "price": Math.floor(Math.random() * 100) + 1, "date": "2009-09-03",d },
    // { "name": "Mouse Gaming", "price": Math.floor(Math.random() * 100) + 1, "date": "2005-02-02-03-13",d },
    // { "name": "Watch 4 Pro", "price": Math.floor(Math.random() * 100) + 1, "date": "2011-02-26",d },
    // { "name": "Asus L4", "price": Math.floor(Math.random() * 100) + 1, "date": "1999-12-10",d },
    {"name": "Macbook 3 Pro", "price": Math.floor(Math.random() * 100) + 1, "date": "2016-03-23", d},
    {"name": "Dell inspriron", "price": Math.floor(Math.random() * 100) + 1, "date": "2017-11-28", d},
    {"name": "Iphone 13 Promax", "price": Math.floor(Math.random() * 100) + 1, "date": "2018-08-27", d},
    {"name": "Iphone 6 Plus", "price": Math.floor(Math.random() * 100) + 1, "date": "2009-07-01", d},
    {"name": "Iphone X", "price": Math.floor(Math.random() * 100) + 1, "date": "2008-06-24", d},
    {"name": "Samsung note 5", "price": Math.floor(Math.random() * 100) + 1, "date": "2018-05-04", d},
    {"name": "Samsung Galaxy 4", "price": Math.floor(Math.random() * 100) + 1, "date": "2014-11-09", d},
    {"name": "Samsung A3", "price": Math.floor(Math.random() * 100) + 1, "date": "2007-12-15", d},
    {"name": "Oppo A5", "price": Math.floor(Math.random() * 100) + 1, "date": "2011-04-13", d},
    {"name": "Nokia 6300", "price": Math.floor(Math.random() * 100) + 1, "date": "2005-02-02", d},
    {"name": "Iphone 5", "price": Math.floor(Math.random() * 100) + 1, "date": "2007-11-01", d},
]
app.controller("secondController", secondController);

function secondController($scope) {

    $scope.products = products;
    $scope.d = d;
    $scope.currentPage = 0;
    $scope.pageSize = 10

    $scope.pageCount = function () {
        return (window.Math.ceil($scope.products.length / $scope.pageSize));
    }
}

// app.config(function ($routeProvider){
//     $routeProvider.when('/home',{
//         templateUrl : 'home.html'
//     }).when('/about', {
//         templateUrl : 'about.html'
//     })
// })
app.filter('startFrom', ['$timeout', function ($timeout) {
    return function (input, start) {
        start = +start;
        if (!input) return;
        return input.slice(start);
    }
}])



