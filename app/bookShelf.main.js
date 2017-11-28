import { default as controllersModuleName } from './bookShelf.controllers';

var moduleName = 'bookShelf';

function config($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl:'./app/home/home.html',
      controller:'bookShelf.homeController',
      controllerAs:'vm'
    })
    .when('/addBook',{
      templateUrl:'./app/addBook/addBook.html',
      controller:'bookShelf.addBookController',
      controllerAs:'vm'
    })
    .when('/archive', {
      templateUrl:'./app/archive/archive.html',
      controller:'bookShelf.archiveController',
      controllerAs:'vm'
    })
    .otherwise({redirectTo:'/'});
}

config.$inject = ['$routeProvider'];

var app = angular.module(moduleName, ['ngRoute', controllersModuleName])
  .config(config);

export default moduleName;