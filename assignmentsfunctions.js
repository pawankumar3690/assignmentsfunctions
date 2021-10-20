// 1. Write a function which accepts three numbers as arguments and returns addition of three numbers.

function add(a, b, c) {
    return a + b + c;
}
console.log(add(32, 10, 8))

console.log('----------------------------');

// 2. Write a function takes time and distance as input and returns speed.

function getSpeed(time, distance) {
    return distance / time;
}
console.log(getSpeed(40, 130))

console.log('----------------------------');

// 3. Write a function which accepts radius as input and return area of a circle as output.

function areaOfCircle(radius) {
    const PI = 3.142
    return radius * radius * PI;
}
console.log(areaOfCircle(12))

console.log('----------------------------');

// 4. Write a function which accepts a number as input and returns factorial of that number.

function factorial(num) {
    let fact = 1;
    if (num == 0 || num == 1)
        return 1;

    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
console.log('factorial of 0 is' + factorial(0));
console.log('factorial of 5 is' + factorial(5));
console.log('factorial of 7 is' + factorial(7));

console.log('----------------------------');

// function which accepts a number as input and returns fcatorial of that number.

function factorial(n) {
    var num = 1;

    for (var i = 2; i <= n; i++)
        num = num * i;
    return num;
}
console.log(factorial(0));
console.log(factorial(5));
console.log(factorial(7));

console.log('----------------------------');

// 5. Write a function which takes an integer as input and returns true if it is even false if it's not.

function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(10));
console.log(isEven(90));
console.log(isEven(67));
console.log(isEven(1168));
console.log(isEven(105));

console.log('----------------------------');

// 6. Write a function which takes an integer as input and returns true if it is odd false if it's not.

function isOdd(num) {
    return num % 2 != 0;
}
console.log(isOdd(10));
console.log(isOdd(90));
console.log(isOdd(67));
console.log(isOdd(1168));
console.log(isOdd(105));


console.log('----------------------------');


// 7. An integer as input and returns true if it is prime false if it's not.

function isPrime(num) {
    if (num == 1 || num == 0)
        return false;

    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
console.log(isPrime(0));
console.log(isPrime(13));
console.log(isPrime(53));
console.log(isPrime(148));
console.log(isPrime(33));

console.log('----------------------------');

// 8. An integer as input and returns true if it is palindrome false if it is not.

function isPalindrome(num) {
    let rev = 0;
    for (let i = num; i > 0;) {
        rem = i % 10;
        rev = rev * 10 + rem;
        i = parseInt(i / 10);
    }
    return rev == num;
}
console.log(isPalindrome(12));
console.log(isPalindrome(121));
console.log(isPalindrome(45));

console.log('----------------------------');

// 9. An integer as input and returns a Fibonacci series of that size and store all the numbers in a string and return the string itself.

function fibonacci(num) {
    let f1 = "0", f2 = "1", f3, string = "";
    for (let i = 1; i <= num; i++) {
        string += f1 + '\t';
        f3 = parseInt(f1 + f2);
        f1 = parseInt(f2);
        f2 = parseInt(f3);
    }
    return string;
}
console.log('fibonacci series are: ' + fibonacci(11));

console.log('----------------------------');

// 10. An integer as input and returns true if it is divisible by 6 false if it's not.

function isDivisble(num) {
    return num % 6 == 0;
}

console.log(isDivisble(20));
console.log(isDivisble(30));
console.log(isDivisble(48));
console.log(isDivisble(18));
console.log(isDivisble(198));

console.log('----------------------------');


// 11. A function accepts the time in seconds and returns the time in hours.

function time(sec) {
    return hours = sec / (60 * 60);
}
console.log('hour=' + time(8000));

console.log('----------------------------');


// 12. A function that counts the number of Digits in an Integer.

function countDigits(num) {
    let count = 0;
    while (num |= 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
console.log(countDigits(150));
console.log(countDigits(16547));
console.log(countDigits(81));
console.log(countDigits(10));

console.log('----------------------------');

// 13. Write a function that accepts an integer and returns the digits repeated twice.

function makeTwice(num) {
    let count = countDigits(num);

    switch (count) {
        case 1: return num * 10 + num;
        case 2: return num * 100 + num;
        case 3: return num * 1000 + num;
        case 4: return num * 10000 + num;
        case 5: return num * 100000 + num;
    }
}
console.log(makeTwice(1));
console.log(makeTwice(12121));
console.log(makeTwice(21));
console.log(makeTwice(189));
console.log(makeTwice(0));
console.log(makeTwice(111222));

console.log('----------------------------');

// 14. Given a 4 digit number as input, find the value of its hundredth digit.

function hundreds_value(num) {
    return hun = parseInt(num / 100) % 10;
}
console.log(hundreds_value(1470));
console.log(hundreds_value(3690));
console.log(hundreds_value(9587));
console.log(hundreds_value(1234));
console.log(hundreds_value(7746));

console.log('----------------------------');

/*15. Calculate RequiredRunRate: A team is chasing the target set in a one-day international match. The objective is to compute the required run rate. The following have been provided as input:
target,maxOvers, currentScore, oversBowled.*/

function RequiredRunRate(target, maxOvers, currentScore, oversBowled) {
    let RequiredRun = target - currentScore;
    let remainedOvers = maxOvers - oversBowled;
    return RequiredRun / remainedOvers;
}
console.log(RequiredRunRate(200, 20, 180, 9));
console.log(RequiredRunRate(380, 50, 280, 30));
console.log(RequiredRunRate(256, 30, 150, 25));
console.log(RequiredRunRate(289, 28, 160, 13));
console.log(RequiredRunRate(176, 40, 180, 19));

console.log('----------------------------');

// 16. MakeDecimal: Given 3 digits a,b and c as input, return a double of the form a.bc.

function MakeDecimal(num1, num2, num3) {
    return ((num1 * 100) + (num2 * 10) + num3) / 100;
}
console.log(MakeDecimal(1, 2, 3));
console.log(MakeDecimal(4, 5, 3));
console.log(MakeDecimal(8, 9, 2));
console.log(MakeDecimal(7, 23, 8));

console.log('----------------------------');

// 17. Sum2Digit: Given a 2 digit number as input, compute the sum of its digits. Assume that the number has 2 digits.

function Sum2Digit(num) {
    let unit_place, tens_place;
    if (num <= 99 && num > 9)
        unit_place = num % 10;
    tens_place = parseInt(num / 10) % 10;
    return unit_place + tens_place;
}
console.log(Sum2Digit(14));
console.log(Sum2Digit(34));
console.log(Sum2Digit(86));
console.log(Sum2Digit(7979));

console.log('----------------------------');

// 18. AndBooleans: Given three booleans as input, return the AND of the all three booleans.

function AndBooleans(boolean1, boolean2, boolean3) {
    return boolean1 && boolean2 && boolean3;
}
console.log(AndBooleans(true, false, false));
console.log(AndBooleans(false, false, false));
console.log(AndBooleans(true, true, true));
console.log(AndBooleans(true, false, true));
console.log(AndBooleans(false, true, false));

console.log('----------------------------');

/* 19. LargerThanOne: Given three numbers as input, num1,num2 and num3, return true if num1 is greater than atleast one of num2 and num3. 
Do not use if statement to solve this problem.*/

function LargerThanOne(num1, num2, num3) {
    return num1 > num2 || num1 > num3;
}
console.log(LargerThanOne(15, 20, 40));
console.log(LargerThanOne(35, 20, 40));
console.log(LargerThanOne(18, 22, 16));
console.log(LargerThanOne(2, 22, 2));
console.log(LargerThanOne(56, 290, 40));

console.log('----------------------------');


/* 20. NumberInAscendingOrder: Given 3 numbers- num1,num2 and num3 as input, return true if they are ascending order. 
Important- Do not use if statement in solution.*/

function numberInAscendingOrder(num1, num2, num3) {
    return num1 < num2 && num2 < num3;
}
console.log(numberInAscendingOrder(10, 20, 30));
console.log(numberInAscendingOrder(90, 80, 70));
console.log(numberInAscendingOrder(600, 20, 30));
console.log(numberInAscendingOrder(105, 120, 130));
console.log(numberInAscendingOrder(6, 20, 2));

console.log('----------------------------');


// 21. SumOf4Digits: Given a number as input, compute the sum of its last 4 digits. Assume that the number has at least 4 digits.

function SumOf4Digits(num) {
    let unit_place, tens_place, hundreds_place, thousands_place;
    if (num >= 1000)
        unit_place = num % 10;
    tens_place = parseInt(num / 10) % 10;
    hundreds_place = parseInt(num / 100) % 10;
    thousands_place = parseInt(num / 1000) % 10;
    return parseInt(unit_place + tens_place + hundreds_place + thousands_place);
}
console.log(SumOf4Digits(1234));
console.log(SumOf4Digits(2368));
console.log(SumOf4Digits(7961));
console.log(SumOf4Digits(4321));

console.log('----------------------------');

/* 22. AreaOfSquare: You have been given 4 inputs x1,y1,x2 and y2. 
The points(x1,y1) and (x2,y2) represent the end points of the diagonal of a square. Return the area of the square.*/

function AreaOfSquare(x1, y1, x2, y2) {
    s1 = x2 - x1;
    s2 = y2 - y1;
    return ((Math.sqrt(s1 ** 2 + s2 ** 2)) ** 2) /2;
}
console.log(AreaOfSquare(2,4,6,8));
console.log(AreaOfSquare(8,6,4,2));
console.log(AreaOfSquare(1,2,3,4));
console.log(AreaOfSquare(12,6,8,12));




