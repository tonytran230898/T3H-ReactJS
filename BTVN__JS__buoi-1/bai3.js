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
const dolphins = (a + b + c) / 3;
console.log(dolphins);
const d = 88;
const e = 91;
const f = 110;
const koalas = (d + e + f) / 3;
console.log(koalas);
// So sánh ĐTB 2 đội xem đội nào cao điểm hơn
if (dolphins > koalas) {
    console.log('Dolphins là đội cao điểm hơn');
} else if (dolphins < koalas) {
    console.log('Koalas là đội cao điểm hơn');
} else {
    console.log('2 đội bằng điểm nhau');
}
// So sánh ĐTB 2 đội với yêu cầu tối thiểu 100đ
if (dolphins > koalas && dolphins >= 100) {
    console.log('Dolphins là đội chiến thắng');
} else if (dolphins < koalas && koalas >= 100) {
    console.log('Koalas là đội chiến thắng');
} else if (dolphins >= 100 && koalas >= 100 && dolphins == koalas) {
    console.log('2 đội hòa nhau');
} else {
    console.log('Không có đội thắng cuộc');
}
