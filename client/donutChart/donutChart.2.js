
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>D3: Pie layout</title>
    <script type="text/javascript" src="../APP/d3/d3.js"></script>
    <style type="text/css">

        text {
            font-family: sans-serif;
            font-size: 12px;
            fill: white;
        }

    </style>
</head>
<body>
<script type="text/javascript">

    var
            width = 300,
            height = 300,
            radius = Math.min(width, height) / 2,
            labelr = radius + 30, // radius for label anchor

            color = d3.scale.category20(),

            pie = d3.layout.pie().sort(null),

            arc = d3.svg.arc()
                    .innerRadius(width / 2)
                    .outerRadius(width / 4),

            svg = d3.select("body")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"),

            data = [
                [25, 25, 25, 25, 0, 0, 0],
                [50, 10, 20, 20, 0, 0, 0],
                [25, 25, 10, 40, 60, 0, 0],
                [10, 15, 10, 75, 34, 56, 34],
                [80, 10, 10, 0, 3, 70, 42],
                [30, 30, 30, 10, 0, 0, 0]
            ],

            g = svg
                    .datum(data[0])
                    .selectAll("path")
                    .data(pie)
                    .enter(),

            path = g.append("path")
                    .attr("fill", function(d, i) {
                        return color(i);
                    })
                    .attr("d", arc)
                    .each(function(d) {
                        this._current = d;
                    }),


            texts = g.append("text")
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".35em")
                    .style("text-anchor", "middle")
                    .text(function(d) {
                        return d.data;
                    });

    function change() {
        clearInterval(interval);
        var i = ++index % data.length;
        svg.datum(data[i])
                .selectAll("path")
                .data(pie)
                .enter();

        g.selectAll("text")
                .enter()
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
        path = path.data(pie); // compute the new angles

        path.transition().duration(1000).attrTween("d", arcTween);

      //  interval = setTimeout(change, 1500);
    }


    var interval, index = 0;
    interval = setTimeout(change, 1000);

    // Store the displayed angles in _current.
    // Then, interpolate from _current to the new angles.
    // During the transition, _current is updated in-place by d3.interpolate.
    function arcTween(a) {
       // debugger;
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function(t) {
            return arc(i(t));
        };
    }

</script>
</body>
</html>