var app = angular.module('jobboard', ['ui.router', 'angularMoment', 'ngSanitize', 'config']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

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
        }]
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
        }]
      }
    })
    .state('404', {
      url: '/404',
      templateUrl: 'views/404.html'
    });
})
.run(function($rootScope, $state) {

  $window.ga('create', 'UA-73558205-1', 'auto');

  $rootScope.$on('$stateChangeError', function(event) {
    $state.go('404');
  });

  $rootScope.$on('$stateChangeSuccess', function (event) {
    $window.ga('send', 'pageview', $location.path());
  });


});
