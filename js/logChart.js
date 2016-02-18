$(function () {

	var data = {
	    labels: ['1', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110', '115', '120', '125', '130', '135', '140', '145', '150', '155', '160', '165', '170', '175', '180', '185', '190', '195', '200', '205', '210', '215', '220', '225', '230', '235', '240', '245', '250', '255', '260', '265', '270', '275', '280', '285', '290', '295', '300', '305', '310', '315', '320', '325', '330', '335', '340', '345', '350', '355', '360','365'],
	    datasets: [
	        {
	            label: "#day",
	            fillColor: "rgba(151,187,205,0.3)",
	            strokeColor: "rgba(151,187,205,0)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "rgba(151,187,205,1)",
	            pointHighlightFill: "red",
	            pointHighlightStroke: "red",
	            data: ['4051944', '1600467', '968386', '672887', '498539', '382516', '295837', '156144', '149315', '132841', '127834', '117579', '112523', '106657', '103202', '99703', '96452', '92219', '91522', '87780', '96763', '10267', '9573', '9180', '9131', '8219', '7944', '7662', '7466', '7034', '7234', '6555', '6378', '6263', '6118', '5861', '6025', '5689', '5324', '5236', '6126', '4931', '4887', '4749', '4616', '4651', '4512', '4502', '4400', '4261', '4278', '4009', '3886', '3708', '3828', '3685', '3651', '3509', '3577', '3467', '4005', '3407', '3314', '3183', '3178', '3216', '3121', '3261', '3108', '3128', '2980', '2998', '3010', '11776']
	        }
	    ]
	};

	var options ={
		pointHitDetectionRadius : 10,
		scaleShowGridLines : true,
		scaleGridLineColor : "rgba(0,0,0,0.2)",
		datasetFill : true,
		responsive: true,
		showTooltips: true,
		annotateDisplay : true,
		animation : true,
		logarithmic: true,
		animationEasing : "easeOutSine",
		xAxisLabel : "Day",
		yAxisLabel : "Number of Posts",
		detectAnnotateOnFullLine : true,
		annotateLabel : "<%= v1 + v2 + ' , ' + v3 +' posts' %>",
		pointDotRadius : 2.5,
		

	};



    var ctx = document.getElementById("logChart").getContext("2d");
	var myNewChart = new Chart(ctx).Line(data,options);




});