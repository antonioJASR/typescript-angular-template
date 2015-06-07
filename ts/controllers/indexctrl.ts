
module app {

    // this fix minification of Javascript,
    // remember that the function parameteres are replaced
    // for  short names on the minification process
    Index.$inject = ['$scope'];

    function Index ($scope) {

    }

    app.ngapp.controller('Index', Index);

    function setRouteState ($stateProvider: ng.ui.IStateProvider) {
       var state: ng.ui.IState = {
           url: '/index',
           templateUrl: "templates/main.index.html",
           controller: 'Index'
       };

       $stateProvider.state('main.index', state);
    }

    app.ngapp.config(setRouteState);

}
