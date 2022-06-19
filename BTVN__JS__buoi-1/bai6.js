const student = 'John';
const s = 'Loại S';
const a = 'Loại A';
const b = 'Loại B';
const c = 'Loại C';
const d = 'Loại D';
const e = 'Loại E';
const i = 98;

if (90 <= i && i <= 100) {
    console.log(`Bạn là nhất! Nhất Bạn rồi! ^^`);
} else if (80 <= i && i <= 90) {
    console.log(`${student} xếp ${a}`);
} else if (70 <= i && i <= 80) {
    console.log(`${student} xếp ${b}`);
} else if (60 <= i && i <= 70) {
    console.log(`${student} xếp ${c}`);
} else if (50 <= i && i <= 60) {
    console.log(`${student} xếp ${d}`);
} else if (0 <= i && 40 <= i && i <= 50) {
    console.log(`${student} xếp ${e}`);
} else {
    console.log(`${student} không được lên lớp`);
}