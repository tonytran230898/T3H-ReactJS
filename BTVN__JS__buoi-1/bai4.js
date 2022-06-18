// Bài 4: Tìm số lớn nhất trong hai số
// -	Input: Cho hai số
// -	Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới dạng ‘N là số lớn nhất’ với N là số lớn nhất
// Data test:
// + Data 1: a = 12, b = -9
const a = 12;
const b = -9;
const N = 'là số lớn nhất';
if (a > b) {
    console.log(`${a} ${N}`);
} else if (a < b) {
    console.log(`${b} ${N}`);
} else if (a == b) {
    console.log('hai số bằng nhau');
}
// + Data 2: a = 6, b = 6
const c = 6;
const d = 6;
if (c > d) {
    console.log(`${c} ${N}`);
} else if (c < d) {
    console.log(`${d} ${N}`);
} else if (c == d) {
    console.log('hai số bằng nhau');
}
// + Data 3: a = -189, b = -987
const e = -189;
const f = -987;
if (e > f) {
    console.log(`${e} ${N}`);
} else if (e < f) {
    console.log(`${f} ${N}`);
} else if (e == f) {
    console.log('hai số bằng nhau');
}
// + Data 4: a = -78, b = 56
const g = -78;
const h = 56;
if (g > h) {
    console.log(`${g} ${N}`);
} else if (g < h) {
    console.log(`${h} ${N}`);
} else if (g == h) {
    console.log('hai số bằng nhau');
}
// + Data 5: a = 9.5, b = 7.9
const i= 9.5;
const k = 7.9;
if (i> k) {
    console.log(`${i} ${N}`);
} else if (i< k) {
    console.log(`${k} ${N}`);
} else if (i== k) {
    console.log('hai số bằng nhau');
}