var colors = ["red", "green", "blue", "cyan", "magenta"];

Plotly.d3.csv("/data_csv_plotly.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var CapacitorA = {
    alphahull: 5,
    opacity: 0.8,
    color: "red",
    type: "mesh3d",
    x: unpack(rows, "x1"),
    y: unpack(rows, "y1"),
    z: unpack(rows, "z1"),
  };

  var CapacitorB = {
    alphahull: 5,
    opacity: 0.8,
    color: "green",
    type: "mesh3d",
    x: unpack(rows, "x2"),
    y: unpack(rows, "y2"),
    z: unpack(rows, "z2"),
  };

  var CapacitorC = {
    alphahull: 5,
    opacity: 0.8,
    color: "blue",
    type: "mesh3d",
    x: unpack(rows, "x3"),
    y: unpack(rows, "y3"),
    z: unpack(rows, "z3"),
  };

  var CapacitorD = {
    alphahull: 5,
    opacity: 0.8,
    color: "cyan",
    type: "mesh3d",
    x: unpack(rows, "x4"),
    y: unpack(rows, "y4"),
    z: unpack(rows, "z4"),
  };

  var CapacitorE = {
    alphahull: 5,
    opacity: 0.8,
    color: "magenta",
    type: "mesh3d",
    x: unpack(rows, "x5"),
    y: unpack(rows, "y5"),
    z: unpack(rows, "z5"),
  };

  var data = [CapacitorA, CapacitorB, CapacitorC, CapacitorD, CapacitorE];
  var layout2 = {
    title: "Sales Growth",
    scene: {
      xaxis: {
        type: "log",
        range: [0, 2.3],
      },
      yaxis: {
        range: [0, 0.5],
      },
      zaxis: {
        range: [-60, -10],
      },
    },
    //     yaxis: {
    //       title: 'Percent',
    //       showline: false
    //     },

    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },

    width: "1000",
    height: "1000",
  };

  var layout = {
    title: "Sales Growth",
    scene: {
      xaxis: {
        type: "log",
        range: [0, 4],
      },
      yaxis: {
        range: [0, 0.5],
      },
      zaxis: {
        range: [-60, -10],
      },
    },
    //     yaxis: {
    //       title: 'Percent',
    //       showline: false
    //     },

    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },

    width: "1000",
    height: "1000",
  };

  Plotly.newPlot("myDiv", data, layout);
  Plotly.newPlot("myDivLower", data, layout2);
});
