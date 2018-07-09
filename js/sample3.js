//Table Comparison

var btn = document.getElementById('cmpbtn');
var menu = document.getElementById('fileselect');
//btn.addEventListener("click",getText);

// function foothree(){
//     var index = ["day1","day2"];
    
//     for(var i=0;i<index.length;i++){
//         var url = "../"+index[i]+".json";
//         let xhttp = new XMLHttpRequest();
//         xhttp.open("GET",url,true);
//         xhttp.onreadystatechange = function(){
//             if(xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200){
//                 var res = JSON.parse(xhttp.responseText);
//                 var row = res.report.table.row;
//                 console.log(xhttp.responseText);
//             }
//         }
//         xhttp.send();
//     }
// }
btn.onclick = function(){
var getText = function(url, cFunction) {
    //console.log(menu.value);
    
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            cFunction(this); //Invoking callback function
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// CAllback function definition

function myFunction(xhttp) {
    var res = JSON.parse(xhttp.responseText); 
    var row = res.report.table.row;
    
   var  xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
               var res1 = JSON.parse(xmlhttp.responseText);
                var row1 = res1.report.table.row;
            //     console.log(row);
            // console.log(row1);
            var txt = "<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\"><tr><th>Ad Group</th>"
            +"<th>Default max.CPC</th><th>Clicks</th><th>Impressions</th><th>CTR</th><th>Avg. CPC</th><th>Cost</th>"
            +"<th>Avg. position</th><th>Conversions</th><th>Cost / conv.</th><th>Conv. rate</th><th>Search Impr. share</th>"
            +"<th>Search Exact match IS</th><th>Campaign state</th><th>AdGroup state</th></tr><tbody>";

            //If day 1 is selected
            if(menu.value == 'day1'){
    
                    for (var i = 0; i < row.length; i++) {

                        txt += '<tr>';
                        txt += '<td>' + row[i]._adGroup + '</td>';
                        if (parseInt(row1[i]._defaultMaxCPC) < parseInt(row[i]._defaultMaxCPC))
                            txt += '<td bgcolor="green">' + row[i]._defaultMaxCPC + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._defaultMaxCPC + '</td>';
                        if (parseInt(row1[i]._clicks) < parseInt(row[i]._clicks))
                            txt += '<td bgcolor="green">' + row1[i]._clicks + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._clicks + '</td>';
                        if (parseInt(row1[i]._impressions) < parseInt(row[i]._impressions))
                            txt += '<td bgcolor="green">' + row[i]._impressions + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._impressions + '</td>';
                        if (parseInt(row1[i]._ctr) < parseInt(row[i]._ctr))
                            txt += '<td bgcolor="green">' + row[i]._ctr + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._ctr + '</td>';
                        if (parseInt(row1[i]._avgCPC) < parseInt(row[i]._avgCPC))
                            txt += '<td bgcolor="green">' + row[i]._avgCPC + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._avgCPC + '</td>';
                        if (parseInt(row1[i]._cost) > parseInt(row[i]._cost))
                            txt += '<td bgcolor="green">' + row[i]._cost + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._cost + '</td>';
                        if (parseInt(row1[i]._avgPosition) < parseInt(row[i]._avgPosition))
                            txt += '<td bgcolor="green">' + row[i]._avgPosition + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._avgPosition + '</td>';
                        if (parseInt(row1[i]._conversions) < parseInt(row[i]._conversions))
                            txt += '<td bgcolor="green">' + row1[i]._conversions + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._conversions + '</td>';
                        if (parseInt(row1[i]._costConv) < parseInt(row[i]._costConv))
                            txt += '<td bgcolor="green">' + row[i]._costConv + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._costConv + '</td>';
                        if (parseInt(row1[i]._costConv) < parseInt(row[i]._costConv))
                            txt += '<td bgcolor="green">' + row[i]._costConv + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._convRate + '</td>';
                        if ((row1[i]._searchImprShare) < (row[i]._searchImprShare))
                            txt += '<td bgcolor="green">' + row[i]._searchImprShare + '</td>';
                        else if ((row1[i]._searchImprShare) > (row[i]._searchImprShare))
                            txt += '<td bgcolor="red">' + row[i]._searchImprShare + '</td>'; 
                        else
                            txt += '<td>' + row[i]._searchImprShare + '</td>'; 
                        if (row1[i]._searchExactMatchIS < row[i]._searchExactMatchIS)
                            txt += '<td bgcolor="green">' + row[i]._searchExactMatchIS + '</td>';
                        else if (row1[i]._searchExactMatchIS > row[i]._searchExactMatchIS)
                            txt += '<td bgcolor="red">' + row[i]._searchExactMatchIS + '</td>';
                        else
                            txt += '<td>' + row[i]._searchExactMatchIS + '</td>';
                        txt += '<td>' + row[i]._campaignState + '</td>';
                        txt += '<td>' + row[i]._adGroupState + '</td>';
                        txt += '</tr>';

                        
                    }
            }

            //If Day 2 is selected
                else if(menu.value == 'day2'){
                    for (var i = 0; i < row1.length; i++) {

                        txt += '<tr>';
                        txt += '<td>' + row[i]._adGroup + '</td>';
                        if (parseInt(row1[i]._defaultMaxCPC) < parseInt(row[i]._defaultMaxCPC))
                            txt += '<td bgcolor="green">' + row[i]._defaultMaxCPC + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._defaultMaxCPC + '</td>';
                        if (parseInt(row1[i]._clicks) < parseInt(row[i]._clicks))
                            txt += '<td bgcolor="green">' + row[i]._clicks + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._clicks + '</td>';
                        if (parseInt(row1[i]._impressions) < parseInt(row[i]._impressions))
                            txt += '<td bgcolor="green">' + row[i]._impressions + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._impressions + '</td>';
                        if (parseInt(row1[i]._ctr) < parseInt(row[i]._ctr))
                            txt += '<td bgcolor="green">' + row[i]._ctr + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._ctr + '</td>';
                        if (parseInt(row1[i]._avgCPC) < parseInt(row[i]._avgCPC))
                            txt += '<td bgcolor="green">' + row[i]._avgCPC + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._avgCPC + '</td>';
                        if (parseInt(row1[i]._cost) < parseInt(row[i]._cost))
                            txt += '<td bgcolor="green">' + row[i]._cost + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._cost + '</td>';
                        if (parseInt(row1[i]._avgPosition) < parseInt(row[i]._avgPosition))
                            txt += '<td bgcolor="green">' + row[i]._avgPosition + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._avgPosition + '</td>';
                        if (parseInt(row1[i]._conversions) < parseInt(row[i]._conversions))
                            txt += '<td bgcolor="green">' + row[i]._conversions + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._conversions + '</td>';
                        if (parseInt(row1[i]._costConv) < parseInt(row[i]._costConv))
                            txt += '<td bgcolor="green">' + row[i]._costConv + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._costConv + '</td>';
                        if (parseInt(row1[i]._costConv) < parseInt(row[i]._costConv))
                            txt += '<td bgcolor="green">' + row[i]._costConv + '</td>';
                        else
                            txt += '<td bgcolor="red">' + row[i]._convRate + '</td>';
                        if ((row1[i]._searchImprShare) < (row[i]._searchImprShare))
                            txt += '<td bgcolor="green">' + row[i]._searchImprShare + '</td>';
                        else if ((row1[i]._searchImprShare) > (row[i]._searchImprShare))
                            txt += '<td bgcolor="red">' + row[i]._searchImprShare + '</td>';
                        else
                            txt += '<td>' + row[i]._searchImprShare + '</td>';
                        if (row1[i]._searchExactMatchIS < row[i]._searchExactMatchIS)
                            txt += '<td bgcolor="green">' + row[i]._searchExactMatchIS + '</td>';
                        else if (row1[i]._searchExactMatchIS > row[i]._searchExactMatchIS)
                            txt += '<td bgcolor="red">' + row[i]._searchExactMatchIS + '</td>';
                        else
                            txt += '<td>' + row[i]._searchExactMatchIS + '</td>';
                        txt += '<td>' + row[i]._campaignState + '</td>';
                        txt += '<td>' + row[i]._adGroupState + '</td>';
                        txt += '</tr>';


                    }
            }

            txt += "</tbody></table>";
            document.getElementById('demo').innerHTML=txt;
            }
        
    };
        //Get JSON data based on callback function 
        if(menu.value == 'day1')  {
            console.log(menu.value);
            
            xmlhttp.open("GET","../day2.json", true);
        }
            
        else if(menu.value == 'day2'){
            console.log(menu.value);
            xmlhttp.open("GET", "../day1.json", true);
        }
        xmlhttp.send();
}
    console.log(menu.value);

    getText('../'+menu.value+'.json',myFunction);

}