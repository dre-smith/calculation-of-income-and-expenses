setInterval(function () {
    const date = new Date(),
        week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        hours = ['час', 'часа', 'часов'],
        minutes = ['минута', 'минуты', 'минут'],
        seconds = ['секунда', 'секунды', 'секунд'],
        сurrentMonth = month[date.getMonth()],
        getCurrentDay = function () {
            let day = (6 + new Date().getDay()) % 7;
            return week[day];
        },
        getDeclension = function (number, form) {
            let result = number % 10;
            if (number > 10 && number < 20) {
                return form[2];
            };
            if (result > 1 && result < 5) {
                return form[1];
            };
            if (result == 1) {
                return form[0];
            };
            return form[2];
        },
        getZero = function (number) {
            if (number >= 0 && number <= 9) {
                return '0' + number;
            } else {
                return number;
            };
        };
    document.querySelectorAll('div')[0].innerHTML = `Сегодня ${getCurrentDay()}, ${date.getDate()} ${сurrentMonth} ${date.getFullYear()} года, ${date.getHours()} ${getDeclension(date.getHours(), hours)} ${date.getMinutes()} ${getDeclension(date.getMinutes(), minutes)} ${date.getSeconds()} ${getDeclension(date.getSeconds(), seconds)}`;
    document.querySelectorAll('div')[1].innerHTML = `${getZero(date.getDate())}.${getZero(date.getMonth())}.${date.getFullYear()} ${getZero(date.getHours())}.${getZero(date.getMinutes())}.${getZero(date.getSeconds())}`;
}, 1000);