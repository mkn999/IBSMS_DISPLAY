window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('intro-page').classList.add('hidden');
      document.getElementById('MainContainer').style.display = 'block'; 
    }, 2000); // 2000 milliseconds = 2 seconds
  });
      /*if station inside array :
      show all corresponding values inside the table
      else show error message .. for example show alert box
var station = {
"kowdiar": { outer key
  "0018":["KW-EF","11:11","11:15","EARLY"], innerkey
  "0019":["KW-AC","11:11","11:15","EARLY"]
}
}
if (station.hasOwnProperty(searchValue) //key) {
StationName.textContent = searchValue.toUpperCase();
busid1.textContent = station[searchValue][];
code to loop through buses
for (var searchValue in station) {
var buses_raw = Object.keys(station[searchValue]);
var buses = buses_raw.join(", ");
for (var i = 0; i < buses.length; i++) {
console.log(buses[i]); // Output: ata, route, ata, eta, status 
}


var firstInnerKey = innerKeys[0];
var buses = station[searchValue][firstInnerKey];
route1.textContent = station[searchValue][firstInnerKey][0];
console.log(buses[0]);

//console.log(buses_joined);   
//busid1.textContent = buses;
//console.log([searchValue][buses][3]); 


for (var i = 0; i < innerKeys.length; i++) {
var currentInnerKey = innerKeys[i];
var buses = station[searchValue][currentInnerKey];

for (var j = 0; j < buses.length; j++) {
  console.log(buses[j]); // Output: ata, route, ata, eta, status
  busid1.textContent = buses[0];

}
}
var innerKeys = Object.keys(station[searchValue]);
for (var i = 0; i < innerKeys.length; i++) {
                  var currentInnerKey = innerKeys[i];
                  var buses = station[searchValue][currentInnerKey];

                  // Set values to corresponding HTML elements
                 // document.getElementById('busid1' + (i + 1)).textContent = searchValue;
                  document.getElementById('route1' + (i + 1)).textContent = buses[0];
                  document.getElementById('status1' + (i + 1)).textContent = buses[2];
              }
              */ 
//the above code will be used for future updates.
function StationSearch(){
    var inputBar = document.getElementById('input');
    var searchValue = inputBar.value.toLowerCase();
    var StationName = document.getElementById('Sname');
    var busid1 = document.getElementById('busid1');
    var busid1 = document.getElementById('busid1');
    var busid2 = document.getElementById('busid2');
    var busid3 = document.getElementById('busid3');
    var busid4 = document.getElementById('busid4');
    var busid5 = document.getElementById('busid5');
    var route1 = document.getElementById('route1');
    var route2 = document.getElementById('route2');
    var route3 = document.getElementById('route3');
    var route4 = document.getElementById('route4');
    var route5 = document.getElementById('route5');
    var ata1 = document.getElementById('ata1');
    var eta1 = document.getElementById('eta1');
    var ata2 = document.getElementById('ata2');
    var eta2 = document.getElementById('eta2');
    var ata3 = document.getElementById('ata3');
    var eta3 = document.getElementById('eta3');
    var ata4 = document.getElementById('ata4');
    var eta4 = document.getElementById('eta4');
    var ata5 = document.getElementById('ata5');
    var eta5 = document.getElementById('eta5');
    var status5 = document.getElementById('status5');
    var status4 = document.getElementById('status4');
    var status3 = document.getElementById('status3');
    var status2 = document.getElementById('status2');
    var status1 = document.getElementById('status1');
var stations = {
"kowdiar":["0018","11:10","11:12","EARLY","R1",
"00019","11:11","11:21","EARLY","R2",
"0020","11:20","11:22","LATE","R3", 
"0021","11:30","11:32","EARLY","R4",
 "0022","11:40","11:42","ON-TIME","R5"],

"statue":["0021", "11:40","11:42","ON-TIME","R6",
 "0023", "11:30","11:32","EARLY","R7",
 "0024","11:40","11:42","ON-TIME","R8",
  "0025", "11:30","11:32","EARLY","R9",
  "0026","0018","11:10","11:12","EARLY","R10"],

"thampanoor":["0051","11:40","11:42","ON-TIME","R11",
 "0052", "11:30","11:32","EARLY","R12",
  "0053", "11:30","11:32","EARLY","R13",
   "0056",  "11:30","11:32","EARLY","R14",
   "0057", "11:30","11:32","EARLY","R18"],

"eastfort":["0001","11:30","11:32","EARLY","R19",
 "0002", "11:30","11:32","EARLY","R19",
 "0003","11:30","11:32","EARLY","R20",
  "0004","11:30","11:32","EARLY","R21",
   "0005", "11:30","11:32","EARLY","R22"]
};
if (stations.hasOwnProperty(searchValue)/*key*/) {
StationName.textContent = searchValue.toUpperCase()
//bus 1
busid1.textContent = stations[searchValue][0];
ata1.textContent = stations[searchValue][1];
eta1.textContent = stations[searchValue][2];
status1.textContent = stations[searchValue][3];
route1.textContent = stations[searchValue][4];
//bus 2
busid2.textContent = stations[searchValue][5];
ata2.textContent = stations[searchValue][6];
eta2.textContent = stations[searchValue][7];
status2.textContent = stations[searchValue][8];
route2.textContent = stations[searchValue][9];
//bus 3
busid3.textContent = stations[searchValue][10];
ata3.textContent = stations[searchValue][11];
eta3.textContent = stations[searchValue][12];
status3.textContent = stations[searchValue][13];
route3.textContent = stations[searchValue][14];
//bus 4
busid4.textContent = stations[searchValue][15];
ata4.textContent = stations[searchValue][16];
eta4.textContent = stations[searchValue][17];
status4.textContent = stations[searchValue][18];
route4.textContent = stations[searchValue][19];
//bus 5
busid5.textContent = stations[searchValue][20];
ata5.textContent = stations[searchValue][21];
eta5.textContent = stations[searchValue][22];
status5.textContent = stations[searchValue][23];
route5.textContent = stations[searchValue][24];
} else {
alert(searchValue + " stop is not found !")
}
}