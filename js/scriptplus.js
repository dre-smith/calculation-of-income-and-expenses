let num = 266219,
    result = true;

num = num.toString().split('');

for (let i = 0; i < num.length; i++) {
    result *= num[i];
}

result = String(result ** 3).substring(0, 2);
console.log(result)