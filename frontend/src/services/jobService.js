angular.module('jobboard')

.service('jobService', function() {
  var selectedJob;
  var filter;
  var sortOptions = {
    sortType: 'created_at',
    reverse: false,
    showExpired: false
  }

  var setJob = function(obj) {
    selectedJob = obj;
  };

  var getJob = function() {
    return selectedJob;
  }

  var clearJob = function() {
    selectedJob = undefined;
  };

  var setFilter = function(obj) {
    filter = obj;
  }

  var getFilter = function(obj) {
    return filter;
  }

  var getSortOptions = function(obj) {
    return sortOptions;
  }

  var setSortOptions = function(obj) {
    sortOptions = obj;
  }

  return {
    setJob: setJob,
    getJob: getJob,
    clearJob: clearJob,
    setFilter: setFilter,
    getFilter: getFilter,
    setSortOptions: setSortOptions,
    getSortOptions: getSortOptions
  };

});
