// Bài 3: 
// -	Input: Cho 1 mảng
// -	Tính tổng mảng đó (dùng for, reduce …. Tất cả các cách để tính tổng mảng đó)
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([2, 4, 6, 8]));

function sumArr(arr) {
    let sum = 0;
    arr.forEach(value => {
        sum += value;
    });
    return sum;
}
console.log(sumArr([2, 4, 6, 8]));

function sumArr(arr) {
    let sum = 0;
    arr.map(value => {
        sum += value;
    });
    return sum;
} 
console.log(sumArr([2, 4, 6, 8]));

const sumArray = (arr) => {
    return arr.reduce((prevousValue, currentValue) => 
    prevousValue + currentValue)
};
console.log(sumArray([2, 4, 6, 8]));