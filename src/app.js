// const inputDate = document.querySelector("#date-input");
const showBtn = document.querySelector("#btn");
const output = document.querySelector("#show-output");

// function 1
//that takes a string and reverses it
function reverseStr(dateIntoStr) {
    const reversedStr = dateIntoStr.split('').reverse().join('');
    return reversedStr;
}



// function 3
// that converts input date into DD/MM/YY format
function dateMonthYear() {
    const dat = parseInt(document.querySelector("#date-input"));
    const date = parseInt(dat);
    const day = (date / 1000000).toFixed(0);
    const month = (date / 10000).toFixed(0);
    const year = (date / 1).toFixed(0);

    const ddmmyy = [day, month, year];
    const dd = day.slice(0);
    const mm = month.slice(2);
    const yy = year.slice(6);

    const newddmmyy = dd + mm + yy;
    return newddmmyy;
}

const x = dateMonthYear();
showBtn.addEventListener('click', console.log(x));