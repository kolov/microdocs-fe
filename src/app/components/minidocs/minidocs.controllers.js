minidocsModule.controller("MinidocsAppController", function ($scope, $log, usersService) {


  $scope.user = {};
  usersService.query(function (data) {
    $scope.user = data;
  });

    var ua = navigator.userAgent;

    $scope.showBrowserWarning = (-1 == ua.indexOf('Chrome'))
      && (-1 == ua.indexOf('Firefox'))
      && (-1 == ua.indexOf('Safari'))
    ;

  }
);




