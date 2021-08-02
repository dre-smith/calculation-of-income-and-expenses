let lang;

function getLang1(value) {
    if (value == 'ru') {
        return ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    } else if (value == 'en') {
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    } else {
        alert('error');
    }
}

lang = getLang1('ru');
console.log(lang);
lang = getLang1('en');
console.log(lang);

function getLang2(value) {
    let langSelection = value;
    switch (langSelection) {
        case 'ru':
            return ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        case 'en':
            return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        default:
            alert('error');
    };
};

lang = getLang2('ru');
console.log(lang);
lang = getLang2('en');
console.log(lang);

function getLang3(value) {
    let langSelection = {
        'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    };
    return langSelection[value];
}

lang = getLang3('ru');
console.log(lang);
lang = getLang3('en');
console.log(lang);

let namePerson = name => {
    return name == 'Артём' ? 'Директор' : (name == 'Максим') ? 'Преподаватель' : 'Студент';
}

console.log(namePerson('Артём'));
console.log(namePerson('Максим'));
console.log(namePerson(''));