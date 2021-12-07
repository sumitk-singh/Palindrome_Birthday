const inputDate = document.querySelector("#date-input");
const showBtn = document.querySelector("#btn");
const show = document.querySelector("#show-output");

// function 1
// that converts input date into DD/MM/YY format and convert it into string
function dayMonthYear() {
    const date = new Date(inputDate.value);
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString().slice(-2);
    const ddmmyy = day + month + year;
    return ddmmyy;
}

// function 2
//that takes a string and reverses it
function reverseStr() {
    const y = dayMonthYear();
    const reversedStr = y.split('').reverse().join('');
    return show.innerText = reversedStr;
}

//function 3
// that checks palindrome
function output() {
    const inputDate = dayMonthYear();
    const reversedDate = reverseStr();
    if (inputDate > 0) {

        if (inputDate === reversedDate) {
            return show.innerText = "Wow, Your birthday is palindrome!";

        } else if (inputDate != reversedDate) {
            return show.innerText = "Ops! Your birthday is not palindrome!";
        }
    } else {
        show.innerText = "Please select the date";
    }

}

showBtn.addEventListener('click', output);