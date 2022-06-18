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
// + 0 <= điểm < 40: Bạn không được lên lớp

const student = 'John';
const s = 'Loại S';
const a = 'Loại A';
const b = 'Loại B';
const c = 'Loại C';
const d = 'Loại D';
const e = 'Loại E';
const i = 65;
if (90 <= i && i <= 100) {
    console.log(`${student} xếp ${s}`);
} else if (80 <= i && i <= 90) {
    console.log(`${student} xếp ${a}`);
} else if (70 <= i && i <= 80) {
    console.log(`${student} xếp ${b}`);
} else if (60 <= i && i <= 70) {
    console.log(`${student} xếp ${c}`);
} else if (50 <= i && i <= 60) {
    console.log(`${student} xếp ${d}`);
} else if (40 <= i && i <= 50) {
    console.log(`${student} xếp ${e}`);
} else if (0 <= i && i < 40) {
    console.log(`${student} không được lên lớp`);
}