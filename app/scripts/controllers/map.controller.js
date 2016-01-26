'use strict';

/**
 * @ngdoc function
 * @name untitled1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the untitled1App
 */
angular.module('trsApp')
  .controller('MapController', function ($scope, $http) {
    var vm = this;

    vm.getOrganizerLogo = function (organizer) {
      organizer = organizer.toLowerCase();

      if (organizer === 'ironman') {
        vm.organizerLogo = 'images/ironman.png';
      } else if (organizer === 'rev3') {
        vm.organizerLogo = 'images/rev3.png';
      } else if (organizer === 'mlt') {
        vm.organizerLogo = 'images/mlt.png';
      }
    };

    vm.getOrganizerWebsite = function (organizer) {
      organizer = organizer.toLowerCase();
      if (organizer === 'ironman') {
        vm.organizerWebsite = 'http://ironman.com';
      } else if (organizer === 'rev3') {
        vm.organizerWebsite = 'http://rev3.com';
      } else if (organizer === 'mlt') {
        vm.organizerWebsite = 'http://mlt.com';
      }
    };

    vm.getLocationsJsonFile = function () {
      $http.get('scripts/external/races.json').then(function (res) {
        $scope.$broadcast('load-markers', res.data);
      }, function (data) {

      });
    };

    vm.getLocationsJsonFile();

    // vm.getLocations = function (events) {
    //angular.forEach(events, function (event,index) {
    //  $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + event.location + '&key=AIzaSyAC-1VFvh-RGIIxrLc8V_oct51Xl7ye0Vg').then(function (response) {
    //    events[index].latitude = response.data.results[0].geometry.location.lat;
    //    events[index].longitude = response.data.results[0].geometry.location.lng;
    //    events[index].type = 'Ironman';
    //    console.log(JSON.stringify(events));
    //  });
    //});
    //};


    $scope.$on('node-click', function (event, val) {
      vm.node = val;
      vm.getOrganizerLogo(vm.node.type);
      vm.getOrganizerWebsite(vm.node.type);
      //WTF WHY DO I NEED THIS 0_o
      $scope.$apply();
    });

  });
