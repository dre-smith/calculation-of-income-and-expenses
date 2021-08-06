const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    date = new Date(),
    today = function () {
        let day = (6 + new Date().getDay()) % 7;
        return week[day];
    };

week.forEach((item, i, week) => {
    let day = week[i];
    if (item == 'Суббота' || item == 'Воскресенье') {
        day = day.italics();
    }
    if (item == today()) {
        day = day.bold();
    }
    const div = document.createElement('div');
    div.innerHTML = day;
    document.body.appendChild(div);
});
