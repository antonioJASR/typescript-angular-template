/// <reference path='_all.ts' />

// this hide message errors from compiler
interface Window {
    cordova: any;
    StatusBar: any;
}

module app  {

    export var ngapp: ng.IModule = angular.module('app', ['ui.router']);

    ngapp.run(function () {

    });
    
    ngapp.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('main', {
            abstract: true,
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: function($scope){

            },
            onEnter: function(){
              console.log("enter main");
            }
      });


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.when("", "/main/list");
      $urlRouterProvider.when("/", "/main/list");
      $urlRouterProvider.otherwise('/main/index');
    });
    
}
