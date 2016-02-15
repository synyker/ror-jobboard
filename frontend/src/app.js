var app = angular.module('jobboard', ['ui.router', 'ui.router.title', 'angularMoment', 'ngSanitize', 'config']);

app.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
'$httpProvider',
function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });

  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: '/views/list.html',
      controller: 'JobsCtrl',
      resolve: {
        jobsPromise: ['jobService', 'jobs', function(jobService, jobs) {
          jobService.clearJob();
          return jobs.getAll();
        }],
        $title: function() { return 'TKO-äly: Rekry'; }
      }
    })
    .state('single', {
      url: '/jobs/:jobId',
      templateUrl: '/views/list.html',
      controller: 'JobsCtrl',
      resolve: {
        jobPromise: ['$stateParams', 'jobService', 'jobs', function($stateParams, jobService, jobs) {
          jobs.getOne($stateParams.jobId).then(function(data) {
            jobService.setJob(data.data);
          });

          return jobs.getAll();
        }],
        $title: ['jobPromise', 'jobService', function(jobPromise, jobService) {
          var job = jobService.getJob();
          return 'TKO-äly: Rekry | ' + job.company.name + ': ' + job.title;
        }]
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: 'views/404.html'
    });
}])
.run(['$rootScope', '$state', '$window', '$location', function($rootScope, $state, $window, $location) {

  $window.ga('create', 'UA-73558205-1', 'auto');

  $rootScope.$on('$stateChangeError', function(event) {
    $state.go('404');
  });

  $rootScope.$on('$stateChangeSuccess', function (event) {
    $window.ga('send', 'pageview', $location.path());
  });


}]);
