		window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Review Statistic",
		horizontalAlign: "left"
	},
	data: [{
		type: "doughnut",
		startAngle: 60,
		//innerRadius: 60,
		indexLabelFontSize: 17,
		indexLabel: "{label} - #percent%",
		toolTipContent: "<b>{label}:</b> {y} (#percent%)",
		dataPoints: [
			{ y: 58, label: "Positive" },
			{ y: 22, label: "Negative" },
			{ y: 20, label: "Neutral" }
		]
	}]
});
chart.render();
}
//$(document).ready(function () {

    //$.getJSON("https://Tresinveniens.github.io/Shopveniens/.../result.json", function (data)
//      $.getJSON("result.json", function (data) 
//        {
//            var imageStatistic = [];
//            var statistic = [];

//            console.log(data.data.length);
//            $.each(data.data, function (i, image) {
//                var l = 0;
//                var found2 = false;
                
//                while (l < statistic.length && !found2) {
//                    if (image.result.value.choices == statistic[j])
//                        found2 = true;
//                    else
//                        l++;
//                }

//               if (!found2)
//                   statistic.push(image.result.value.choices);

  //              $.each(image.regions, function (j, choicesName) {
  //                  var found = false;
//                    var k = 0;

   //                 while (k < imageStatistic.length && !found) {
   //                     if (choicesName == imageStatistic[k].label) {
   //                         imageStatistic[k].y++;
       //                     found = true;
   //                     } else
     //                       k++;
  //                  }

//                    if (!found)
              //          imageStatistic.push({
          //                  label: choicesName,
            //                y: 1
        //                });
      //          });
    //        });

  //          console.log(statistic.length);

//            $("#numberOfVideosListIndex").append('<span class="counter text-success">' + data.data.length + '</span>');
//            $("#numberOfChannelsListIndex").append('<span class="counter text-purple">' + statistic.length + '</span>');
//            $("#numberOfRegionsListIndex").append('<span class="counter text-info">' + imageStatistic.length + '</span>');

   //         CanvasJS.addColorSet("customColorSet", [
  //              "#393f63",
 //               "#e5d8B0",
//                "#ffb367",
//                "#f98461",
//                "#d9695f",
//                "#e05850",
//            ]);

//            var options = {
//                animationEnabled: true,
//                colorSet: "customColorSet",
//                data: [{
//                    type: "doughnut",
//                    innerRadius: "70%",
//                    showInLegend: true,
//                    legendText: "{label}",
//                    indexLabel: "{label}: #percent%",
//                    dataPoints: imageStatistic
//                }],
//                animationDuration: 800,
//                animationEnabled: true,
//                backgroundColor: "transparent",
//                colorSet: "customColorSet",
//                theme: "theme2",
//                legend: {
//                    fontFamily: "calibri",
//                    fontSize: 14,
//                    horizontalAlign: "left",
//                    verticalAlign: "center",
//                    itemTextFormatter: function (e) {
//                        return e.dataPoint.name + ": " + Math.round(e.dataPoint.y 
//                         activeUsers * 100) + "%";
//                    }
//                },
//                title: {
//                    dockInsidePlotArea: true,
//                    fontSize: 55,
//                    fontWeight: "normal",
//          horizontalAlign: "center",
//            verticalAlign: "center",
//              text: data.data.length
//            }
//          };
//
//          var chart = new CanvasJS.Chart("chartContainer", options);
//            chart.render();
//        });