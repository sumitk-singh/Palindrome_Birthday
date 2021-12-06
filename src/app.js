const inputDate = document.querySelector("#date-input");
const showBtn = document.querySelector("#btn");
const show = document.querySelector("#show-output");

// function 1
//that takes a string and reverses it
function reverseStr(dateIntoStr) {
    const reversedStr = dateIntoStr.split('').reverse().join('');
    return reversedStr;
}



// function 3
// that converts input date into DD/MM/YY format
function dateMonthYear() {
    const date = inputDate.value;
    const x1 = new Date(date);
    const day = x1.getDate().toString();
    const month = (x1.getMonth() + 1).toString();
    const year = x1.getFullYear().toString();
    const newddmmyy = day + month + year;
    return newddmmyy;
}

function output() {
    const x = dateMonthYear();
    return console.log(x);
}

showBtn.addEventListener('click', output);