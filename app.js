angular.module('formApp', ['ngAnimate', 'uiRouter'])    //definiamo un modulo per la creazione dell'applicazione
.config(function($stateProvider, $urlRouteProvider) //configuriamo le rotte
{
    $stateProvider
        .state('form', 
        {
            url: '/form',   //route per mostrare il form di base
            templateUrl:'form.html',
            controller : 'formController'
        })
        .state('form.profile', 
        {
            url: '/profile',
            templateUrl:'form-profile.html'
        })
        .state('form.interest', 
        {
            url: '/interest',
            templateUrl:'form-interest.html'
        })
        .state('form.payment', 
        {
            url: '/payment',
            templateUrl:'form-payment.html'
        });

        $urlRouteProvider.otherwise('/form/profile');   //invia gli utenti alla pagina del form

})
.controller('formController', function($scope)  //definiamo un controller
{
    $scope.formData = {};
    $scope.processFrom = function()
    {
        alert(" ME LO FAI VEDERE QUESTO ? ");
    }
});
