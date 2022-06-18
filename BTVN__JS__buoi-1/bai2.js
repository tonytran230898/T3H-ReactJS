// Bài 2: Giải phương trình bậc 1:
// -	Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)
// -	Output: Tìm x
// Data test:
// + Data 1: -2x – 9 = -3
const i = -2;
const j = -9;
const k = -3;
function giai_pt_bac_nhat(i, j, k) {
if (i != 0 && j >= 0 || j <= 0 && k != 0 ) {
    console.log('phương trình có nghiệm x = ' + (k - j) / i);
}
}
giai_pt_bac_nhat(i, j, k);

// + Data 2: 5x + 7 = 9
const a = 5;
const b = 7;
const c = 9;
function giai_pt_bac_nhat(a, b, c) {
if (a != 0 && b >= 0 || b <= 0 && c != 0 ) {
    console.log('phương trình có nghiệm x = ' + (c - b) / a);
}
}
giai_pt_bac_nhat(a, b, c);