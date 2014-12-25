angular.module('testDistribution', [])
    .directive('donutChart', function() {
        return {

            restrict: 'EA',
            scope: {
                dataValue: '='
            },

            link: function(scope, element, attrs) {
            function doit(){
                //Donut chart example
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
      ;

    d3.select("#chart2 svg")
        .datum(exampleData())
        .transition().duration(350)
        .call(chart);

  return chart;
});

//Pie chart example data. Note how there is only a single array of key-value pairs.
function exampleData() {
  return  [
      { 
        "label": "One",
        "value" : 29.765957771107
      } , 
      { 
        "label": "Two",
        "value" : 0
      } , 
      { 
        "label": "Three",
        "value" : 32.807804682612
      } , 
      { 
        "label": "Four",
        "value" : 196.45946739256
      } , 
      { 
        "label": "Five",
        "value" : 0.19434030906893
      } , 
      { 
        "label": "Six",
        "value" : 98.079782601442
      } , 
      { 
        "label": "Seven",
        "value" : 13.925743130903
      } , 
      { 
        "label": "Eight",
        "value" : 5.1387322875705
      }
    ];
}

            }
            doit();

                function donutChart(parent) {
                    var _height = 500,
                        _width = 500,
                        _radius = 200,
                        _innrRadius = _radius - 100,
                        _data = [30,30],

                        _color = d3.scale.ordinal()
                        .range(['red', 'blue', 'green']);


                    function component() {
                        var canvas = d3.select(parent).append('svg')
                            .attr('width', _height)
                            .attr('height', _width);
                             


                        var group = canvas.append('g')
                            .attr('trasform', 'translate(300,300)');



                        var arc = d3.svg.arc()
                            .innerRadius(_innrRadius)
                            .outerRadius(_radius);

                        var pie = d3.layout.pie()
                            .value(function(d) {
                                return d;
                            });

                        var arcs = group.selectAll('.arc')
                            .data(pie(_data))
                            .enter()
                            .append('g').attr('class', 'arc');


                        arcs.append('path')
                            .attr('d', arc);
                    };







                    component.render = function() {
                        // do somthing
                        component();
                        return component;


                    };

                    component.data = function(val) {
                        if (!arguments.length) {
                            return _data;
                        }
                        _data = val;
                        return component;


                    };



                    return component;




                }


                donutChart(element[0])
                      .data([50, 40])
                      .render();
            }
        };

    });
