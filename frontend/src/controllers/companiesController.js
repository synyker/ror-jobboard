angular.module('jobboard')

.controller('CompaniesCtrl', [
'$scope',
'companies',
function($scope, companies) {
  $scope.companies = companies.companies;
}]);
