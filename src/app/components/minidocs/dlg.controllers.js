
minidocsModule.controller("DlgController", function ($scope, $uibModalInstance, itinerary, evtService) {


  $scope.close = function () {
    $uibModalInstance.close();
  };

  $scope.itinerary = itinerary;

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };

  $scope.linkEbookers = function (it) {
    return 'http://www.ebookers.nl/psi?type=air&triptype=roundtrip&origin=AMS'
      + '&dest=' + destcode
      + '&departdate=' + moment.utc(it.outDepartureDateTime).format('YYYY-MM-DD')
      + '&departspan=Anytime'
      + '&returndate=' + moment.utc(it.inDepartureDateTime).format('YYYY-MM-DD')
      + '&returnspan=Anytime&cabin=C&adults=2';
  };
  $scope.linkTransavia = function (it) {
    return 'https://www.transavia.com/nl-NL/bookingtool/flights/deeplink?'
      + 'as=' + it.destination
      + '&ds=' + it.origin
      + '&ap=1'
      + '&cp=0'
      + '&od=' + moment.utc(it.outDepartureDateTime).format('DD')
      + '&om=' + +moment.utc(it.outDepartureDateTime).format('MM')
      + '&oy=' + +moment.utc(it.outDepartureDateTime).format('YYYY')
      + '&id=' + moment.utc(it.inDepartureDateTime).format('DD')
      + '&im=' + +moment.utc(it.inDepartureDateTime).format('MM')
      + '&iy=' + +moment.utc(it.inDepartureDateTime).format('YYYY')
      + '&utm_source=API&utm_medium=where2fly2&r=true';
  };
  $scope.linkWtc = function (it) {
    return 'http://www.worldticketcenter.nl/trade/?tt=505_12_228148_'
      + '&r=https%3A%2F%2Fengine.wtc.nl%2Fresults%3Fairtrade_init%3D1%26affiliate%3Dwtcnl%26channel%3DSABREWSWTC'
      + '%26vertrek1%3DAmsterdam%28AMS%29'
      + '%26bestemming1%3D' + it.destination + '%28' + it.destination + '%29'
      + '%26departureDate%3D' + moment.utc(it.outDepartureDateTime).format('DD-MM-YYYY')
      + '%26returnDate%3D' + moment.utc(it.inDepartureDateTime).format('DD-MM-YYYY')
      + '%26vertrek2%3D' + it.destination + '%28' + it.destination + '%29'
      + '%26bestemming2%3DAmsterdam%28AMS%29'

      //   + '%26Airline%3D'
      + '%26EcoBusFir%3Deco'
      + '%26NumberAdults%3D1'
      + '%26NumberChildren%3D0'
      + '%26NumberInfants%3D0'
      + '%26roundtrip%3D1'
      + '%26airtrade%3D1';
  };

  $scope.buy = function () {
    var url = $scope.itinerary.group === 'transavia' ? $scope.linkTransavia($scope.itinerary) : $scope.linkWtc($scope.itinerary);
    evtService.post({action: 'buy', link: url});
    $uibModalInstance.dismiss();
    window.open(url, '_blank');
  };


});