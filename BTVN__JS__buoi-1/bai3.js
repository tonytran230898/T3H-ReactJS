// Bài 3:
// Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng 3 lần khác. Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!
// Yêu cầu:
// -	Tính điểm trung bình của mỗi đội
// -	So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi và in ra đội chiến thắng. Đừng quên rằng có thể có một trận hòa, vì vậy hãy kiểm tra điều đó (hòa có nghĩa là họ có cùng điểm trung bình)
// -	Yêu cầu về số điểm tối thiểu là 100. Với quy tắc này, một đội chỉ thắng nếu có số điểm cao hơn đội còn lại, đồng thời phải đạt ít nhất 100 điểm. Với yêu cầu này hãy tìm đội thắng. Nếu không có đội thắng hãy in ra thông báo hợp lệ (Không có đội thắng cuộc)
// -	Điểm số tối thiểu cũng áp dụng cho một trận hòa! Vì vậy kết quả hòa chỉ xảy ra khi cả hai đội có số điểm bằng nhau và cả hai đều có số điểm lớn hơn hoặc bằng 100 điểm. Nếu không, không đội nào giành được cúp
// Data test:
// + Data 1: Dolphins có điểm là 96, 108 và 89. Koalas có điểm là  88, 91 và 110

// Tính ĐTB cả 2 đội
const a = 96;
const b = 108;
const c = 89;
const Dolphins = (a + b + c) / 3;
console.log(Dolphins);
const d = 88;
const e = 91;
const f = 110;
const Koalas = (d + e + f) / 3;
console.log(Koalas);
// So sánh ĐTB 2 đội xem đội nào cao điểm hơn
if (Dolphins > Koalas) {
    console.log('Dolphins là đội cao điểm hơn');
} else if (Dolphins < Koalas) {
    console.log('Koalas là đội cao điểm hơn');
} else if (Dolphins == Koalas) {
    console.log('2 đội bằng điểm nhau');
}
// So sánh ĐTB 2 đội với yêu cầu tối thiểu 100đ
if (Dolphins > Koalas && Dolphins >= 100) {
    console.log('Dolphins là đội chiến thắng');
} else if (Dolphins < Koalas && Koalas >= 100) {
    console.log('Koalas là đội chiến thắng');
} else if (Dolphins >= 100 && Koalas >= 100 && Dolphins == Koalas) {
    console.log('2 đội hòa nhau');
} else {
    console.log('Không có đội thắng cuộc');
}
// + Data Bonus 1: Dolphins có điểm là  97, 112 và 101. Koalas có điểm là 109, 95 và 123

// Tính ĐTB cả 2 đội
const g = 97;
const h = 112;
const i = 101;
const Dolphins1 = (g + h + i) / 3;
console.log(Dolphins1);
const j = 109;
const k = 95;
const l = 123;
const Koalas1 = (d + e + f) / 3;
console.log(Koalas1);
// So sánh ĐTB 2 đội xem đội cao điểm hơn
if (Dolphins1 > Koalas1) {
    console.log('Dolphins1 là đội cao điểm hơn');
} else if (Dolphins1 < Koalas1) {
    console.log('Koalas1 là đội cao điểm hơn');
} else if (Dolphins1 == Koalas1) {
    console.log('2 đội bằng điểm nhau');
}
// So sánh ĐTB 2 đội với yêu cầu tối thiểu 100đ
if (Dolphins1 > Koalas1 && Dolphins1 >= 100) {
    console.log('Dolphins1 là đội chiến thắng');
} else if (Dolphins1 < Koalas1 && Koalas1 >= 100) {
    console.log('Koalas1 là đội chiến thắng');
} else if (Dolphins1 >= 100 && Koalas1 >= 100 && Dolphins1 == Koalas1) {
    console.log('2 đội hòa nhau');
} else {
    console.log('Không có đội thắng cuộc');
}
// + Data Bonus 2: Dolphins có điểm là 97, 112 và 101. Koalas có điểm là 109, 95 và 106

// Tính ĐTB cả 2 đội
const m = 97;
const n = 112;
const o = 101;
const Dolphins2 = (m + n + o) / 3;
console.log(Dolphins2);
const p = 109;
const q = 95;
const r = 106;
const Koalas2 = (p + q + r) / 3;
console.log(Koalas2);
// So sánh ĐTB 2 đội xem đội cao điểm hơn
if (Dolphins2 > Koalas2) {
    console.log('Dolphins2 là đội cao điểm hơn');
} else if (Dolphins2 < Koalas2) {
    console.log('Koalas2 là đội cao điểm hơn');
} else if (Dolphins2 == Koalas2) {
    console.log('2 đội bằng điểm nhau');
}
// So sánh ĐTB 2 đội với yêu cầu tối thiểu 100đ
if (Dolphins2 > Koalas2 && Dolphins2 >= 100) {
    console.log('Dolphins2 là đội chiến thắng');
} else if (Dolphins2 < Koalas2 && Koalas2 >= 100) {
    console.log('Koalas2 là đội chiến thắng');
} else if (Dolphins2 >= 100 && Koalas2 >= 100 && Dolphins2 == Koalas2) {
    console.log('2 đội hòa nhau');
} else {
    console.log('Không có đội thắng cuộc');
}