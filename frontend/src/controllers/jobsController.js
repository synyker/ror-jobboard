angular.module('jobboard')

.controller('JobsCtrl', [
'$scope',
'$location',
'$sce',
'jobs',
'jobService',
function($scope, $location, $sce, jobs, jobService) {
  $scope.jobs = jobs.jobs;

  $scope.sortOptions = jobService.getSortOptions();
  $scope.trueReverse = true;
  console.log($scope.sortOptions); 


  $scope.$watch(function() { return $scope.sortOptions.sortType }, function (newVal, oldVal) {
    $scope.trueReverse = $scope.sortOptions.sortType === 'created_at' ? !$scope.sortOptions.reverse : $scope.sortOptions.reverse;
    jobService.setSortOptions($scope.sortOptions);
  });

  $scope.$watch(function() { return $scope.sortOptions.reverse }, function (newVal, oldVal) {
    $scope.trueReverse = $scope.sortOptions.sortType === 'created_at' ? !$scope.sortOptions.reverse : $scope.sortOptions.reverse;
    jobService.setSortOptions($scope.sortOptions);
  });

  $scope.$watch(function() { return $scope.sortOptions.showExpired }, function (newVal, oldVal) {
    jobService.setSortOptions($scope.sortOptions);
  });

  $scope.$watch(function() { return jobService.getSortOptions() }, function (newVal, oldVal) {
    $scope.sortOptions = jobService.getSortOptions();
  });

  $scope.$watch(function() { return jobService.getJob() }, function (newVal, oldVal) {
    $scope.selectedJob = jobService.getJob();
  });

  $scope.$watch(function() { return jobService.getFilter() }, function (newVal, oldVal) {
    $scope.filterJob = jobService.getFilter();
  });

  $scope.clearActiveJob = function() {
    $location.path('/');
    jobService.clearJob();
  }

  $scope.setActiveJob = function(job) {
    $location.path('/jobs/' + job.id);

    $("body").animate({ scrollTop: 100 }, "fast");

    jobService.setJob(job);

  }

  $scope.isActive = function(job) {
    if (!job.end)
      return false;
    return moment().isAfter(moment(job.end));
  }

  $scope.setFilterTag = function(name) {
    if ($scope.filterJob && $scope.filterJob.indexOf(name) == -1) {
      jobService.setFilter($scope.filterJob + ', ' + name);
    }
    else if (!$scope.filterJob) {
      jobService.setFilter($scope.filterJob = name);
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
