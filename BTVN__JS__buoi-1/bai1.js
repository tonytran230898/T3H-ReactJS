// Bài 1:
// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng
// -	Input: Cho cân nặng, chiều cao của 2 người
// -	Output: 
// + Tính BMI của từng người
// + Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì
// Data test:
// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m 
// user1
const name1 = 'Marks';
const mass1 = 78;
const hieght1 = 1.69;
const BMI1 = mass1 / (hieght1 * hieght1);
// user2
const name2 = 'John';
const mass2 = 92;
const hieght2 = 1.95;
const BMI2 = mass2 / (hieght2 * hieght2);
BMI1 > BMI2 
? console.log(`${name1} BMI (${BMI1}) is higher than ${name2} BMI (${BMI2}) `)
: console.log(`${name1} BMI (${BMI1}) is lower than ${name2} BMI (${BMI2}) `)
// if (BMI1 > BMI2) {
//     console.log(`${name1} BMI (${BMI1}) is higher than ${name2} BMI (${BMI2}) `);
// } else {
//     console.log(`${name1} BMI (${BMI1}) is lower than ${name2} BMI (${BMI2}) `);
// }
