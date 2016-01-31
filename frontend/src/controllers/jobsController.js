angular.module('jobboard')

.controller('JobsCtrl', [
'$scope',
'$location',
'$sce',
'jobs',
'jobService',
function($scope, $location, $sce, jobs, jobService) {
  $scope.jobs = jobs.jobs;

  $scope.$watch(function() { return jobService.getJob() }, function (newVal, oldVal) {
    $scope.selectedJob = jobService.getJob();
  });

  $scope.clearActiveJob = function() {
    $location.path('/');
    jobService.clearJob();
    console.log($scope.filterJob);
  }

  $scope.setActiveJob = function(job) {
    $location.path('/jobs/' + job.id);
    jobService.setJob(job);
    $("body").animate({ scrollTop: 0 }, "fast");
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

  $scope.tagFilter = function(obj) {

    var filters;
    if ($scope.filterJob) {
      tempFilters = $scope.filterJob.toLowerCase().split(',');
      filters = [];
      for (var i = 0; i < tempFilters.length; i++) {
        newFilter = tempFilters[i].trim();
        if (newFilter != '')
          filters.push(newFilter);
      }
    }

    var tags = '';
    for (var i = 0; i < obj.tags.length; i++) {
      tags += obj.tags[i].name.toLowerCase() + ' ';
    }

    if (filters) {
      var ret = false;

      for (var filter in filters) {
        ret = (
          (
          obj.company.name.toLowerCase().indexOf(filters[filter]) > -1 ||
          obj.title.toLowerCase().indexOf(filters[filter]) > -1 ||
          tags.indexOf(filters[filter]) > -1
          )
          || ret
        );
      }

      return ret;
    }

    return true;

    //var re = new RegExp($scope.filterJob, 'i
    //return !$scope.filterJob || re.test(obj.company.name) || re.test(obj.title) || re.test(tags);
  };
}]);
