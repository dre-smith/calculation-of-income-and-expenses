for (let i = 2; i <= 100; i++) {
    function primeNum(num) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return;
            }
        }
        console.log(num, `- делители этого числа: 1 и ${num}`);
        return num;
    };
    primeNum(i);
};


let arr = ['1234', '2345', '3456', '4567', '5678', '6789', '7890'],
    newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 1) == 2 || arr[i].slice(0, 1) == 4) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);