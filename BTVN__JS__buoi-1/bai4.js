// Bài 4: Tìm số lớn nhất trong hai số
// -	Input: Cho hai số
// -	Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới dạng ‘N là số lớn nhất’ với N là số lớn nhất
// Data test:
// + Data 1: a = 12, b = -9
function biggestNumber(a, b) {
    a > b ? console.log(`${a} là số lớn nhất`) 
    : a < b ? console.log(`${b} là số lớn nhất`)
    : console.log('hai số bằng nhau')
    return a, b;
};

biggestNumber(12, 9);