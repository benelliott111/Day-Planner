var currentDay = moment().format('MMMM Do YYYY');
document.querySelector('#currentDay').innerHTML = currentDay;
var currentHour = moment().format('H')

//set calendar colour based on hour 
if(currentHour === '9'){
    document.querySelector('#nine').style.backgroundColor = "red" 
    document.querySelector('#ten').style.backgroundColor = "green" 
    document.querySelector('#eleven').style.backgroundColor = "green" 
    document.querySelector('#twelve').style.backgroundColor = "green" 
    document.querySelector('#one').style.backgroundColor = "green" 
    document.querySelector('#two').style.backgroundColor = "green" 
    document.querySelector('#three').style.backgroundColor = "green"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"  

} else if (currentHour === "10"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "red" 
    document.querySelector('#eleven').style.backgroundColor = "green" 
    document.querySelector('#twelve').style.backgroundColor = "green" 
    document.querySelector('#one').style.backgroundColor = "green" 
    document.querySelector('#two').style.backgroundColor = "green" 
    document.querySelector('#three').style.backgroundColor = "green"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "11"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "red" 
    document.querySelector('#twelve').style.backgroundColor = "green" 
    document.querySelector('#one').style.backgroundColor = "green" 
    document.querySelector('#two').style.backgroundColor = "green" 
    document.querySelector('#three').style.backgroundColor = "green"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "12"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "grey" 
    document.querySelector('#twelve').style.backgroundColor = "red" 
    document.querySelector('#one').style.backgroundColor = "green" 
    document.querySelector('#two').style.backgroundColor = "green" 
    document.querySelector('#three').style.backgroundColor = "green"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "13"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "grey" 
    document.querySelector('#twelve').style.backgroundColor = "grey" 
    document.querySelector('#one').style.backgroundColor = "red" 
    document.querySelector('#two').style.backgroundColor = "green" 
    document.querySelector('#three').style.backgroundColor = "green"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "14"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "grey" 
    document.querySelector('#twelve').style.backgroundColor = "grey" 
    document.querySelector('#one').style.backgroundColor = "grey" 
    document.querySelector('#two').style.backgroundColor = "red" 
    document.querySelector('#three').style.backgroundColor = "green"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "15"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "grey" 
    document.querySelector('#twelve').style.backgroundColor = "grey" 
    document.querySelector('#one').style.backgroundColor = "grey" 
    document.querySelector('#two').style.backgroundColor = "grey" 
    document.querySelector('#three').style.backgroundColor = "red"
    document.querySelector('#four').style.backgroundColor = "green" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "16"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "grey" 
    document.querySelector('#twelve').style.backgroundColor = "grey" 
    document.querySelector('#one').style.backgroundColor = "grey" 
    document.querySelector('#two').style.backgroundColor = "grey" 
    document.querySelector('#three').style.backgroundColor = "grey"
    document.querySelector('#four').style.backgroundColor = "red" 
    document.querySelector('#five').style.backgroundColor = "green"
} else if (currentHour === "17"){
    document.querySelector('#nine').style.backgroundColor = "grey" 
    document.querySelector('#ten').style.backgroundColor = "grey" 
    document.querySelector('#eleven').style.backgroundColor = "grey" 
    document.querySelector('#twelve').style.backgroundColor = "grey" 
    document.querySelector('#one').style.backgroundColor = "grey" 
    document.querySelector('#two').style.backgroundColor = "grey" 
    document.querySelector('#three').style.backgroundColor = "grey"
    document.querySelector('#four').style.backgroundColor = "grey" 
    document.querySelector('#five').style.backgroundColor = "red"
} else {
    document.querySelector('#nine').style.backgroundColor = "white" 
    document.querySelector('#ten').style.backgroundColor = "white" 
    document.querySelector('#eleven').style.backgroundColor = "white" 
    document.querySelector('#twelve').style.backgroundColor = "white" 
    document.querySelector('#one').style.backgroundColor = "white" 
    document.querySelector('#two').style.backgroundColor = "white" 
    document.querySelector('#three').style.backgroundColor = "white"
    document.querySelector('#four').style.backgroundColor = "white" 
    document.querySelector('#five').style.backgroundColor = "white"
} 

var calendarNotes

// set localstorage to ""
if (localStorage.getItem("calendarNotes").value === null){
    calendarNotes = {
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
}

    localStorage.setItem("calendarNotes", JSON.stringify(calendarNotes))

}

var storedNotes = JSON.parse(localStorage.getItem("calendarNotes"))

document.getElementById('nine').value = storedNotes.nine
document.getElementById('ten').value = storedNotes.ten
document.getElementById('eleven').value = storedNotes.eleven
document.getElementById('twelve').value = storedNotes.twelve
document.getElementById('one').value = storedNotes.one
document.getElementById('two').value = storedNotes.two
document.getElementById('three').value = storedNotes.three
document.getElementById('four').value = storedNotes.four
document.getElementById('five').value = storedNotes.five


function submitNine(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#nine').value 
    storedNotes.nine = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitTen(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#ten').value 
    storedNotes.ten = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitEleven(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#eleven').value 
    storedNotes.eleven = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitTwelve(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#twelve').value 
    storedNotes.twelve = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitOne(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#one').value 
    storedNotes.one = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitTwo(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#two').value 
    storedNotes.two = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitThree(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#three').value 
    storedNotes.three = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitFour(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#four').value 
    storedNotes.four = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

function submitFive(event){
    let logValue
    console.log(logValue)
    logValue = document.querySelector('#five').value 
    storedNotes.five = logValue  
    localStorage.setItem("calendarNotes", JSON.stringify(storedNotes))
}

