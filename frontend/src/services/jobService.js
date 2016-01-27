angular.module('jobboard')

.service('jobService', function() {
  var selectedJob;

  var setJob = function(obj) {
    selectedJob = obj;
  };

  var getJob = function() {
    return selectedJob;
  }

  var clearJob = function() {
    selectedJob = undefined;
  };

  return {
    setJob: setJob,
    getJob: getJob,
    clearJob: clearJob
  };

});
