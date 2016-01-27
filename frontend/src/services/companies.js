angular.module('jobboard')

.factory('companies', [
'$http',
'api',
function($http, api) {
  var o = {
    companies: []
  };

  o.getAll = function() {
    return $http.get(api + '/companies.json').success(function(data) {
      angular.copy(data, o.companies);
    });
  };

  o.getOne = function(id) {
    return $http.get(api + '/companies/' + id + '.json').success(function(data) {
      o.companies.push(data);
    });
  };

  return o;
}])
