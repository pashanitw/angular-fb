var app=angular.module('appApp');
app
    .config(function ($routeProvider) {
  angular.forEach(getRoutes(),function(value,index){
     $routeProvider.when(value.route,value.settings);
  });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
})
    .config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    })
.config(function($provide){
$provide.decorator('$log',function($delegate){
var original=$delegate.debug;
    $delegate.debug=function(){
        var args=Array.prototype.slice.call(arguments);
        args[0]=[new Date(),args[0]].join(':');
        original.apply(null,args);
    }
    return $delegate;
});
});

function getRoutes () {
    return [
        {
            route: '/',
            settings: {
                controller: 'MainCtrl',
                number: 1,
                templateUrl: 'views/main.html'
            }
        },
        {
            route: '/about',
            settings: {
                controller: 'MainCtrl',
                number: 1,
                templateUrl: 'views/about.html'
            }
        }
    ]
}