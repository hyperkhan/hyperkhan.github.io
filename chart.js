google.charts.load('current', {'packages':['corechart', "line"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Per capita cheese consumption', '# of people died by tangled in bedsheets'],
      ['2000',  29.8,      327],
      ['2001',  30.1,       456],
      ['2002',  30.5,      509],
      ['2003',  30.6,      497],
      ['2004',  31.3,      596],
      ['2005',  31.7,       573],
      ['2006',  32.6,      661],
      ['2007',  33.1,      741],
      ['2008',  32.7,      809],
      ['2009',  32.8,       717],
    ])
    fontName: 'Quicksand'
    ;

var options = {
    pointSize: 10,
    areaOpacity: "0.1 ",
    backgroundColor: 'transparent',
    curveType: 'function',
    fontName: 'Quicksand',
    title: 'Per capita cheese consumption -- correlates with -- Number of people who died by becoming tangled in their bedsheets',
    hAxis: {title: 'Year',  titleTextStyle: {color: 'black'}}  , 
    series:[
                {targetAxisIndex:0},
                {targetAxisIndex:1},
    ],

    vAxes:[
      {title: 'Cheese consumed (in lbs)', ticks: [{v:28.5, f:'28.5lbs'},{v:30, f:'30lbs'},{v:31.5, f:'31.5lbs'},{v:33, f:'33lbs'},]
  }, // Left axis
      {title: 'Bedsheet tangling', ticks: [{v:200, f:'200'},{v:400, f:'400'},{v:600, f:'600'},{v:800, f:'800'},]
  } // Right axis
    ]

 };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
