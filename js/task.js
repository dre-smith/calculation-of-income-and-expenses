function getString(value) {
    if (typeof value !== 'string') {
        alert('Аргумент не является строкой');
        return;
    } else {
        let str = value.trim();
        return str.length > 30 ? str.slice(0, 30) + '...' : str;
    }
};

console.log(getString(1234567890));
console.log(getString('ABC'));
console.log(getString('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'));