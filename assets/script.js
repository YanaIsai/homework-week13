
const message = document.querySelector('span');
const button = document.getElementById('btn');
const today = new Date();
let days;
let num;

function changeDeclination(x) {
    if ((x !== 11) && ((x === 1) || (x % 10 == 1) || (x % 100 == 1))) {
        days = "день"
    }
    else if (((x !== 12) && ((x === 2) || (x % 10 == 2) || (x % 100 == 2))) || ((x !== 13) && ((x == 3) || (x % 10 == 3) || (x % 100 == 3))) || ((x !== 14) && ((x == 4) || (x % 10 == 4) || (x % 100 == 4)))) {
        days = "дня"
    }
    else {
        days = "дней"
    }
}

function countDays() {
    const birthday = document.getElementById('bday').value;
    let birthdayDate = new Date(birthday);

    birthdayDate.setFullYear(today.getFullYear());

    const dif = birthdayDate - today;

    if (birthday == "") {
        message.textContent = "Введите дату рождения";
        message.style.color = "red";
    }

    else {

        message.style.color = "black";

        if (dif > 0) {
            num = Math.round(dif / (1000 * 60 * 60 * 24));
            changeDeclination(num);
            message.textContent = `До вашего дня рождения осалось: ${num} ${days}`;
        }
        else if (dif < 0) {
            birthdayDate.setFullYear(today.getFullYear() + 1);
            const newDif = birthdayDate - today;
            num = Math.round(newDif / (1000 * 60 * 60 * 24));
            changeDeclination(num);
            message.textContent = `До вашего дня рождения осалось: ${num} ${days}`;
        }
        else if (dif == 0) {
            message.textContent = "С днем Рождения!"
        }
        else {
            message.textContent = "Введите дату рождения"
        };
    };
};

button.addEventListener('click', countDays)


