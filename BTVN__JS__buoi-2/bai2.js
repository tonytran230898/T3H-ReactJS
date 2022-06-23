// Bài 2: 
// -	Input: Cho 1 object
// -	Output: Viết hàm kiểm tra xem object đó rỗng không
let obj1 = {
    name: 'Tony',
    age: 24
}
let obj2 = {};

function objEmpty() {
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};

console.log(objEmpty(obj1));



