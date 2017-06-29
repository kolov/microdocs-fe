minidocsModule.directive('helloUser', function () {
  return {
    restrict: 'E',
    controller: function ($scope, $http, usersService) {
      $scope.logout = function () {
        $http({
            method: 'POST',
            url: '/logout'
          }).then(
          function () {
            $scope.user = usersService.query()
          });
      };


      $scope.login = function (provider) {
        // not using $resource or $http because of CORS issues

        document.forms['login-form-' + provider].submit();
      };

    },
    scope: {
      user: '='
    },
    templateUrl: 'app/pages/dirs/hello-user.html'
  };

});
