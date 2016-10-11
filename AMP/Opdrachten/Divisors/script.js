var myNumber = 8400;
var myNumber1 = 2.4;

highestdivider = 0;
highestnumber = 0;
divisorsPerNumber = [];
divisorsList = myNumber.divisors();

console.log(myNumber.isDivisor(5));
console.log(myNumber.gayAssFunction());
for (var i = 0; i < divisorsList.length; i++) {
  console.log(divisorsList[i]);
}

for (var i = 0; i < myNumber; i++) {
  divisors = i.divisors()
  divisorsPerNumber[i] = divisors.length;
}
for(i = 0;i<divisorsPerNumber.length;i++){
  if(highestnumber< divisorsPerNumber[i]){
    highestnumber = divisorsPerNumber[i];
    highestdivider = i;
  }
}
console.log(highestdivider);
console.log(highestnumber);

var myTable = document.getElementById("myTable");
var table = document.createElement('table');
for(let i=1;i<myNumber;i++){
  var tr = document.createElement("tr");
  table.appendChild(tr);
  var td0 = document.createElement("td");
  tr.appendChild(td0);
  td0.appendChild(document.createTextNode(i));
  var td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.appendChild(document.createTextNode(i.divisors()));
  var td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.appendChild(document.createTextNode(i.divisors().length));
}
myTable.appendChild(table);
