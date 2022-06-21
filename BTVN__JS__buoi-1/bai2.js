// Bài 2: Giải phương trình bậc 1:
// -	Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)
// -	Output: Tìm x
// + Data test: 5x + 7 = 9
function giai_pt_bac_nhat(a, b, c) {
    if (a != 0 && b >= 0 || b <= 0 && c != 0 ) {
        console.log('phương trình có nghiệm x = ' + (c - b) / a);
    };
    return a, b, c;
};
giai_pt_bac_nhat(5, 7, 9);