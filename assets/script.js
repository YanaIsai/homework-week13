
const message = document.querySelector('span');
const button = document.getElementById('btn');
const today = new Date();


function countDays() {
    const birthday = document.getElementById('bday').value;
    let birthdayDate = new Date(birthday);

    birthdayDate.setFullYear(today.getFullYear());

    const dif = birthdayDate - today;

    if (birthday == "") { message.textContent = "Введите дату рождения" }

    else {

        if (dif > 0) {
            message.textContent = `До вашего дня рождения осалось: ${Math.round(dif / (1000 * 60 * 60 * 24))} дней`;
        }
        else if (dif < 0) {
            birthdayDate.setFullYear(today.getFullYear() + 1);
            const newDif = birthdayDate - today;
            message.textContent = `До вашего дня рождения осалось: ${Math.round(newDif / (1000 * 60 * 60 * 24))} дней`;
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


