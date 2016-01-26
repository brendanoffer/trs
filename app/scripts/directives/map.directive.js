angular.module('trsApp')
  .directive('triathlonMap', function () {
    return {
      restrict: 'E',
      scope: {
        nodeClick: '='
      },
      template: "<div id='container' style='position: relative; width: 100%;'></div>",
      link: function(scope,element,attr) {
        var map = new Datamap({
          element: element[0].lastChild,
          responsive: true,
          geographyConfig: {
            highlightOnHover: false,
            popupOnHover: false
          },
          done: function(datamap) {
            datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));

            function redraw() {
              datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }
          }
        });

        map.addPlugin('markers', Datamap.customMarkers);
        var options = {
          fillOpacity: 1,
          popupOnHover: true,
          popupTemplate: function (d, x) {
            return '<div class="hoverinfo"><strong>' + d.name + '</strong><br><div>' + d.raceType + '</div>';
          },
          icon: {
            url: function (d) {
              if (d.type.toLowerCase() === 'rev3') {
                return 'images/rev3.png'
              } else if (d.type.toLowerCase() === 'ironman') {
                return 'images/ironman.png'
              } else if (d.type.toLowerCase() === 'escape_from_alcatraz') {
                return 'images/escape_from_alcatraz.jpg'
              }else if (d.type.toLowerCase() === 'mlt') {
                return 'images/mlt.png'
              }

            },
            width: 13,
            height: 13
          }
        };

        scope.$on('load-markers', function(ev,data){

          map.markers(data,options);

          var markers = d3.selectAll('.datamaps-marker')
            .on('click', function (d) {
              scope.$emit('node-click', d);
              //$('#race-info-box').html("<div class='myHeader'>" + d.type + "</div>");
            });
        });


        //map.markers(
//        {name: 'bar', radius: 10, latitude: 60.23, longitude: 63.13},
//        {name: 'baz', radius: 10, latitude: 70.11, longitude: 82.76}
//        ], options);




      }
    }
  });
