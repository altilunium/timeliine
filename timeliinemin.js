// Timeliine v22.5 Copyright 2022 Altilunium
function parseTgl(t) {
	if(t=="n"){
		return Date.now()
	}
	console.log("Parsing :"+t)
    function e(t) {
        var e = "";
        switch (t) {
            case "Jan":
                e = 1;
                break;
            case "Feb":
                e = 2;
                break;
            case "Mar":
                e = 3;
                break;
            case "Apr":
                e = 4;
                break;
            case "May":
                e = 5;
                break;
            case "Jun":
                e = 6;
                break;
            case "Jul":
                e = 7;
                break;
            case "Aug":
                e = 8;
                break;
            case "Sep":
                e = 9;
                break;
            case "Oct":
                e = 10;
                break;
            case "Nov":
                e = 11;
                break;
            case "Dec":
                e = 12;
        }
        e -= 1
        return e;
    }
    var a = t.split(" ");
    if ((console.log(a.length), 4 == a.length)) {
        var r = a[0],
            s = a[2],
            l = a[3].split(":"),
            n = l[0],
            c = l[1],
            i = e(a[1]);
        return new Date(s, i, r, n, c);
    }
    if (3 == a.length) {
        (r = a[0]), (s = a[2]), (i = e(a[1]));
        console.log("Month ::"+i)
        console.log(new Date(s, i, r))
        console.log(new Date(2022, 0, 1))
        return new Date(s, i, r);
    }
    if (2 == a.length) {
        (s = a[1]), (i = e(a[0]));
        return new Date(s, i, 1);
    }
    if (1 == a.length) return new Date(a[0], 1, 1);
}
var svg, xScale2, height;
function li_setup(t, e, a) {
    const r = parseTgl(e),
        s = parseTgl(a),
        l = 0,
        n = 0,
        c = 60,
        i = 20,
        o = screen.width;
    height = screen.height;
    const g = d3
        .zoom()
        .on("zoom", () => {
            svg.select(".x-axis2").call(d3.axisBottom(d3.event.transform.rescaleX(xScale2))),
                svg.selectAll(".dots").attr("transform", d3.event.transform),
                svg.selectAll(".linee").attr("transform", d3.event.transform),
                svg.selectAll(".txt").attr("transform", d3.event.transform);
        })
        .scaleExtent([-1 / 0, 1 / 0]);
    (xScale2 = d3.scaleTime().domain([r, s]).nice().range([0, o])),
        (svg = d3
            .select(t)
            .append("svg")
            .attr("width", o + i + n)
            .attr("height", height + l + c)
            .call(g)
            .append("g")
            .attr("transform", `translate(${i},${l})`))
            .append("defs")
            .append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("x", 0)
            .attr("width", o)
            .attr("height", height),
        svg
            .append("g")
            .attr("class", "x-axis2")
            .attr("clip-path", "url(#clip)")
            .attr("transform", `translate(0,${height - 10})`)
            .call(d3.axisBottom(xScale2));
}
function stamp(t, e, a) {
	console.log("Stamping "+e+" in "+t)
    var r = xScale2(parseTgl(t));
    svg
        .append("line")
        .attr("class", "linee")
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", r)
        .attr("y1", height - 10)
        .attr("x2", r)
        .attr("y2", a + 5),
        svg
            .append("line")
            .attr("class", "linee")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("x1", r)
            .attr("y1", a + 5)
            .attr("x2", r + 10)
            .attr("y2", a + 5),
        svg
            .append("text")
            .attr("class", "txt")
            .attr("x", r + 2)
            .attr("y", a + 1)
            .text(e),
        svg
            .append("circle")
            .attr("class", "dots")
            .attr("r", 2)
            .attr("fill", "black")
            .attr("cx", r)
            .attr("cy", a + 5);
}
