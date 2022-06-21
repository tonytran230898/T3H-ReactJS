// Bài 1:
// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng
// -	Input: Cho cân nặng, chiều cao của 2 người
// -	Output: 
// + Tính BMI của từng người
// + Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì
// Data test:
// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m 
const bmi = (m, h) => {
    const formulBmi = m / h ** 2
    return formulBmi;
};
const heigherBMI = (n1, m1, h1, n2, m2, h2) => {
    bmi(m1, h1) > bmi(m2, h2)
    ? console.log(`${n1} BMI is higher than ${n2}`)
    : console.log(`${n2} BMI is higher than ${n1}`)
    return n1, m1, h1, n2, m2, h2;
};

heigherBMI('Mark', 78, 169, 'John', 92, 195);

