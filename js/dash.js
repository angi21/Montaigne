// var getd = document.getElementById('fileselect');
// getd.addEventListener('change',getdata);1

var menu = document.getElementById('fileselect');
window.onload = function(){
    //Default chart day1.json
    var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        //exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "ADGROUP_PERFORMANCE_REPORT"
        },
        axisY: {
            title: "Cost per conversion"
        },
        axisX: {
            title: "Averge Position"
        },
        data: [{
            type: "bar",
            dataPoints: dataPoints,
        }]
    });
    var xhttp = new XMLHttpRequest(); //AJAX request 
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && this.status != 304) {
            var res = JSON.parse(xhttp.responseText);
            var row = res.report.table.row;
            var hd = res.report.table.columns.column;
            //console.log(row);
            for (var i = 0; i < row.length; i++) {
                dataPoints.push({ x: parseInt(row[i]._impressions), y: parseInt(row[i]._ctr) });
            }
            chart.render();

            var txt = "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\"><tr><th>Ad Group</th><th>Default max.CPC</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg. CPC</th><th>Cost</th><th>Avg. position</th><th>Conversions</th><th>Cost / conv.</th><th>Conv. rate</th><th>Search Impr. share</th><th>Search Exact match IS</th><th>Campaign state</th><th>AdGroup state</th></tr><tbody>";
            for (var i = 0; i < row.length; i++) {

                txt += '<tr>';
                txt += '<td>' + row[i]._adGroup + '</td>';
                txt += '<td>' + row[i]._defaultMaxCPC + '</td>';
                txt += '<td>' + row[i]._clicks + '</td>';
                txt += '<td>' + row[i]._impressions + '</td>';
                txt += '<td>' + row[i]._ctr + '</td>';
                txt += '<td>' + row[i]._avgCPC + '</td>';
                txt += '<td>' + row[i]._cost + '</td>';
                txt += '<td>' + row[i]._avgPosition + '</td>';
                txt += '<td>' + row[i]._conversions + '</td>';
                txt += '<td>' + row[i]._costConv + '</td>';
                txt += '<td>' + row[i]._convRate + '</td>';
                txt += '<td>' + row[i]._searchImprShare + '</td>';
                txt += '<td>' + row[i]._searchExactMatchIS + '</td>';
                txt += '<td>' + row[i]._campaignState + '</td>';
                txt += '<td>' + row[i]._adGroupState + '</td>';
                txt += '</tr>';
            }
            txt += "</tbody></table>";
            document.getElementById('demo').innerHTML = txt;

        }

    };

    xhttp.open("GET", "../day1.json", true);

    xhttp.send();
}
menu.addEventListener("change",gendata);
function gendata(e){
    //Day1.json graph and table
    if(menu.value == "day1"){
        var dataPoints = [];
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            //exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Adgroup Performance Report"
            },
            axisY: {
                title: "Cost per conversion"
            },
            axisX:{
                title: "Averge Position"
            },
            data: [{
                type: "bar",
                dataPoints: dataPoints,
            }]
        });
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200 && this.status != 304) {
                var res = JSON.parse(xhttp.responseText);
                var row = res.report.table.row;
                var hd = res.report.table.columns.column;
                //console.log(row);
                for (var i = 0; i < row.length; i++) {
                    dataPoints.push({ x: parseInt(row[i]._impressions), y: parseInt(row[i]._ctr) });
                }
                chart.render();

                var txt = "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\"><tr><th>Ad Group</th><th>Default max.CPC</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg. CPC</th><th>Cost</th><th>Avg. position</th><th>Conversions</th><th>Cost / conv.</th><th>Conv. rate</th><th>Search Impr. share</th><th>Search Exact match IS</th><th>Campaign state</th><th>AdGroup state</th></tr><tbody>";
                for (var i = 0; i < row.length; i++) {

                    txt += '<tr>';
                    txt += '<td>' + row[i]._adGroup + '</td>';
                    txt += '<td>' + row[i]._defaultMaxCPC + '</td>';
                    txt += '<td>' + row[i]._clicks + '</td>';
                    txt += '<td>' + row[i]._impressions + '</td>';
                    txt += '<td>' + row[i]._ctr + '</td>';
                    txt += '<td>' + row[i]._avgCPC + '</td>';
                    txt += '<td>' + row[i]._cost + '</td>';
                    txt += '<td>' + row[i]._avgPosition + '</td>';
                    txt += '<td>' + row[i]._conversions + '</td>';
                    txt += '<td>' + row[i]._costConv + '</td>';
                    txt += '<td>' + row[i]._convRate + '</td>';
                    txt += '<td>' + row[i]._searchImprShare + '</td>';
                    txt += '<td>' + row[i]._searchExactMatchIS + '</td>';
                    txt += '<td>' + row[i]._campaignState + '</td>';
                    txt += '<td>' + row[i]._adGroupState + '</td>';
                    txt += '</tr>';
                }
                txt += "</tbody></table>";
                document.getElementById('demo').innerHTML = txt;

            }
            else {
                return this.status = 304; // returns error 304
            }

        };

        xhttp.open("GET", "../day1.json", true);

        xhttp.send();
    }
    // Day2.json graph and table
    else if(menu.value == "day2"){
        var dataPoints = [];
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            //exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Criteria performance report"
                
            },
            axisY: {
                title: "Impressions"
            },
            axisX: {
                title: "Click through rate",
                interval: 500
            },
            data: [{
                type: "bar",
                dataPoints: dataPoints,
            }]
        });
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200 && this.status != 304) {
                var res = JSON.parse(xhttp.responseText);
                var row = res.report.table.row;
                var hd = res.report.table.columns.column;
                //console.log(row);
                for (var i = 0; i < row.length; i++) {
                    dataPoints.push({ x: parseInt(row[i]._ctr), y: parseInt(row[i]._impressions) });
                }
                chart.render();

                var txt = "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\"><tr><th>Ad Group</th><th>Default max.CPC</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg. CPC</th><th>Cost</th><th>Avg. position</th><th>Conversions</th><th>Cost / conv.</th><th>Conv. rate</th><th>Search Impr. share</th><th>Search Exact match IS</th><th>Campaign state</th><th>AdGroup state</th></tr><tbody>";
                for (var i = 0; i < row.length; i++) {

                    txt += '<tr>';
                    txt += '<td>' + row[i]._adGroup + '</td>';
                    txt += '<td>' + row[i]._defaultMaxCPC + '</td>';
                    txt += '<td>' + row[i]._clicks + '</td>';
                    txt += '<td>' + row[i]._impressions + '</td>';
                    txt += '<td>' + row[i]._ctr + '</td>';
                    txt += '<td>' + row[i]._avgCPC + '</td>';
                    txt += '<td>' + row[i]._cost + '</td>';
                    txt += '<td>' + row[i]._avgPosition + '</td>';
                    txt += '<td>' + row[i]._conversions + '</td>';
                    txt += '<td>' + row[i]._costConv + '</td>';
                    txt += '<td>' + row[i]._convRate + '</td>';
                    txt += '<td>' + row[i]._searchImprShare + '</td>';
                    txt += '<td>' + row[i]._searchExactMatchIS + '</td>';
                    txt += '<td>' + row[i]._campaignState + '</td>';
                    txt += '<td>' + row[i]._adGroupState + '</td>';
                    txt += '</tr>';
                }
                txt += "</tbody></table>";
                document.getElementById('demo').innerHTML = txt;

            }
            else {
                return this.status = 304; // returns error 304
            }

        };

        xhttp.open("GET", "../day2.json", true);

        xhttp.send();
    }
}