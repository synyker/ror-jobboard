angular.module('jobboard')

.controller('SingleCtrl', [
'$scope',
'$location',
'jobs',
'jobService',
function($scope, $location, jobs, jobService) {
  $scope.jobs = jobs.jobs;

  $scope.$watch(function() { return jobService.getJob() }, function (newVal, oldVal) {
    $scope.selectedJob = jobService.getJob();
    console.log('wuuu');
  });

  $scope.clearActiveJob = function() {
    $location.path('/');
    jobService.clearJob();
  }

  $scope.isActive = function(job) {
    if (!job.end)
      return false;
    return moment().isAfter(moment(job.end));
  }

  $scope.setFilterTag = function(name) {
    if ($scope.filterJob && $scope.filterJob.indexOf(name) == -1) {
      $scope.filterJob += ', ' + name;
    }
    else if (!$scope.filterJob) {
      $scope.filterJob = name;
    }
  }

}]);
