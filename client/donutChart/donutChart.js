angular.module('testDistribution', [])
    .directive('donutChart', function() {
        return {

            restrict: 'EA',
            scope: {
                dataValue: '='
            },

            link: function(scope, element, attrs) {
                function donutChart(parent) {
                    var _height = 500,
                        _width = 500,
                        _radius = 200,
                        _diameter = 400,
                        _innrRadius = _radius - 100;

                    var _data = [80, 50, 80];
                    var canvas,arcs;

                    var color = d3.scale.ordinal()
                        .range(['red', 'blue', 'orange']);

                    function component() {
                        canvas = d3.select(parent).append('svg')
                            .attr('width', _height)
                            .attr('height', _width);

                        var group = canvas.append('g')
                            .attr('transform', 'translate(300, 300)');

                        var arc = d3.svg.arc()
                            .innerRadius(_innrRadius)
                            .outerRadius(_radius);

                        var pie = d3.layout.pie()
                            .value(function(d) {
                                return d;
                            });

                          arcs = group.selectAll('.arc')
                            .data(pie(_data))
                            .enter()
                            .append('g')
                            .attr('class', 'arc');

                        arcs.append('path')
                            .attr('d', arc)
                            .attr('fill', function(d) {
                                return color(d.data);
                            });

                        arcs.append('text')
                            .attr('transform', function(d) {
                                return 'translate(' + arc.centroid(d) + ')';
                            })
                            .attr('text-anchor', 'middle')
                            .attr('font-size', '1.5em')
                            .text(function(d) {
                                return d.data;
                            });
                    }

                    function change() {
                        pie.value(function(d) {
                                return d;
                            });
                        arcs.data(pie(_data));
                       
                       // path = path.data(pie); // compute the new angles
                    //    path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
                    }
                    component.render = function() {
                       /* if(canvas){
                        // do somthing
                        change();
                        }*/
                        component(
                            );
                        return component;


                    };
                    /*  function measure() {
                       // _fontSize = _diameter * 0.2;
                        _arc.outerRadius(_diameter / 2);
                        _arc.innerRadius(_diameter / 2 * _innerRadiusFactor);
                    }*/

                    component.data = function(val) {
                        if (!arguments.length) {
                            return _data;
                        }
                        _data = val;
                        return component;


                    };
                    return component;
                }






                var don = donutChart(element[0])
                    .data([50, 40, 20])
                    .render();

                setTimeout(function() {
                    don.data([20, 70, 20]).render();
                }, 4000);
            }
        };

    });
