import angular from 'angular';
// import loginComponent from './views/login/login.component';


let app= angular.module("MyApp", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
    console.log("heeral");
             $urlRouterProvider.otherwise('/home');
    
             $stateProvider
             .state('addBook', {
               url: "/addBook",
               templateUrl: "/views/addBooks/addBooks.html"
             })
             .state('bookList', {
               url: "/viewBooks",
               templateUrl: "/views/bookList/bookList.html",
           
            });
 });
    


app.component('login', loginComponent);

export default app;