anychart.onDocumentReady(function() {


    var myVar = document.getElementById("myVar").value;
    var myVar1 = document.getElementById("myVar1").value;
    var myVar2 = document.getElementById("myVar2").value;

    // set the data
    var data = [
        {x: "Daily Assesments", value: myVar},
        {x: "Monthly Assesments", value:myVar1},
        {x: "Weekly Assesments", value: myVar2},

    ];

    // create the chart
    var chart = anychart.pie();

    // set the chart title
    chart.title("Assesment Report");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('container');
    chart.draw();

  });