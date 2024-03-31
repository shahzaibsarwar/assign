// Array of city names
var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

// Function to print all cities
function printAllCities() {
    var output = document.getElementById("statement");
    output.innerHTML = "";
    for (var i = 0; i < cities.length; i++) {
        let num = i + 1;
        output.innerHTML += num + ') ' + cities[i] + ' ';
        console.log(cities[i]);
    }
}

// Call the function to print all cities
printAllCities();
// Simple Alert
document.getElementById("Simple Alert").onclick = function () {
    alert("Shahzaib")

}
// Print My Name
document.getElementById("Print My Name").onclick = function () {
    document.getElementById("output").innerText = "Shahzaib";
}
// Add Your City In List
function addCity(){
    document.getElementById("Add Your City In List").innerHTML = ""
    let cities = ["Faisalabad","Lahore","Karachi","Isalambad","Burewala","Sheikhupura","Kashmir",]
    let addCity = document.getElementById(" output").value
    if(addCity===""){
        alert("Please Enter Your City");
        return;
    }
    else{
        cities.push(addCity)
        }
        for(i=0; i<cities.length;i++)
         document.getElementById("Add Your City In List").innerHTML += i+1 +")"  + " " + cities[i] +"<br />"
    }

// generate table 
function generateTable(){
    document.getElementById("output").innerHTML = ""
    tableNumber = +prompt("please enter table number that use want to generate")
    // document.getElementById("output").innerHTML = <h3>Table of ${tableNumber}<h3/> <hr />
    for(let i=1; i<11; i++){
        let table = tableNumber + " * " + i + " = " + tableNumber*i + "<br />"
        document.getElementById("output").innerHTML += table ;
    }
}
// clear Section 
document.getElementById("clear").onclick = function(){
    document.getElementById("clearOutput").innerHTML = ""
}
document.getElementById("clearout").onclick = function(){
    document.getElementById("output").innerHTML = ""
}
