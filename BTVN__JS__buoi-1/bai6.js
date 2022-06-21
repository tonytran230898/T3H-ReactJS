// Bài 6: Tìm xếp loại điểm của học sinh
// -	Input: Cho vào tên học sinh, và điểm số của học sinh đó
// -	Output: Tìm xếp loại hạnh kiểm và in ra dưới dạng Tên_học_sinh xếp loại loại_điểm_của_học_sinh
// Xếp loại điểm như sau:
// + 90 <= điểm <= 100: Loại S
// + 80 <= điểm < 90: Loại A
// + 70 <= điểm < 80: Loại B
// + 60 <= điểm < 70: Loại C
// + 50 <= điểm < 60: Loại D
// + 40 <= điểm < 50: Loại E
// + 0 <= điểm < 40: Bạn không được lên lớps

const s = 'nhất bạn luôn, bạn là nhất luôn! ^^';
const a = 'hạng A';
const b = 'hạng B';
const c = 'hạng C';
const d = 'hạng D';
const e = 'hạng E';
function rank(student, point) {
    if (90 <= point && point <= 100) {
        console.log(`${student} à! ${s}`);
    } else if (80 <= point && point <= 90) {
        console.log(`${student} xếp ${a}`);
    } else if (70 <= point && point <= 80) {
        console.log(`${student} xếp ${b}`);
    } else if (60 <= point && point <= 70) {
        console.log(`${student} xếp ${c}`);
    } else if (50 <= point && point <= 60) {
        console.log(`${student} xếp ${d}`);
    } else if (0 <= point && 40 <= point && point <= 50) {
        console.log(`${student} xếp ${e}`);
    } else {
        console.log(`${student} không được lên lớp`);
    };
    return student, point;
};
console.log(rank('Tony', 98));