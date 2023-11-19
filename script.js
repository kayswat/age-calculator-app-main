


const yearResult = document.querySelector(".result-years");
const monthResult = document.querySelector(".result-months");
const dayResult = document.querySelector(".result-days");


const error = document.getElementsByClassName("error-message");
const dayError = document.querySelector(".day-error-message");
const monthError = document.querySelector(".month-error-message");
const yearError = document.querySelector(".year-error-message");

const resultYear = document.querySelector(".result-years");
const resultMonth = document.querySelector(".result-months");
const resultDay = document.querySelector(".result-days");


const submitBtn = document.querySelector("button");

function submitDate(){
    const year = document.querySelector(".year-box").value;
    const month = document.querySelector(".month-box").value;
    const day = document.querySelector(".day-box").value;

const date = new Date();

let y2 = date.getFullYear();
let m2 = date.getMonth();
let d2 = date.getDate();

// Looping through the error messages
for(let i = 0; i < error.length; i++){
    currentError = error[i];

//setting correct days in a month to the month entered
const daysInMonth = new Date(year, month, 0).getDate();


if (day > daysInMonth && month < 1 || month > 12 && year > date.getFullYear()){
    dayError.style.display = "block";
    dayError.innerHTML = "Must be a valid day"
    monthError.style.display = "block";
    monthError.innerHTML = "Must be a valid month"
    yearError.style.display = "block";
    yearError.innerHTML = "Must be a valid year"
}
else if(year, month, day == ""){
    currentError.style.display = "block";
    currentError.innerHTML = "This field is required"
}
else if(day > daysInMonth){
    currentError.style.display = 'none';
    dayError.style.display = "block";
    dayError.innerHTML = "Must be a valid day"
}
else if( month < 1 || month > 12 ){
    currentError.style.display = 'none';
    monthError.style.display = "block";
    monthError.innerHTML = "Must be a valid month"
}
else if(year > date.getFullYear()){
    currentError.style.display = 'none';
    yearError.style.display = "block";
    yearError.innerHTML = "Must be a valid year"
}
else{
    let d3, m3, y3;

    y3 = y2 - year;
   

    if (m2 => month){
        m3 = m2 - month;
    }else{
        y3--;
        m3 = 12 + m2 - month;
    }
    if (d2 => day){
        d3 = d2 - day;
    }else{
        m3--;
        d3 = getDaysInMonth(year, month) + d2 - day;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    resultYear.innerHTML = y3; 
    resultMonth.innerHTML = m3;
    resultDay.innerHTML = d3;
    currentError.style.display = 'none';
    yearError.style.display = 'none';
    monthError.style.display = 'none';
    dayError.style.display = 'none';
}


}


}

function getDaysInMonth(year, month){
    return new Date(year, month,0).getDate();
}

submitBtn.addEventListener("click", submitDate);