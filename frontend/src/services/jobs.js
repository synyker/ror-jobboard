angular.module('jobboard')

.factory('jobs', [
'$http',
'api',
function($http, api) {
  var o = {
    jobs: []
  };

  o.getAll = function() {
    return $http.get(api + '/jobs.json').success(function(data) {
      angular.copy(data, o.jobs);
    });
  };

  o.getOne = function(id) {
    return $http.get(api + '/jobs/' + id + '.json').success(function(data) {
      o.jobs.push(data);
    });
  };

  return o;
}])
