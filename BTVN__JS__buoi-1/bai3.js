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
function mediumScore(a, b, c) { // Hàm tính ĐTB
    const dtb = (a + b + c) / 3;
    return dtb;
};
const teamDophins = (mediumScore(96, 108, 89));
    console.log(teamDophins);
const teamKolas = (mediumScore(88, 91, 110));
    console.log(teamKolas);

// So sánh ĐTB 2 đội xem đội nào cao điểm hơn
function compare(teamDophins, teamKolas) { // Hàm so sánh ĐTB 2 đội
    if (teamDophins > teamKolas) {
        console.log('Dolphins là đội cao điểm hơn');
    } else if (teamDophins < teamKolas) {
        console.log('Koalas là đội cao điểm hơn');
    } else {
        console.log('2 đội bằng điểm nhau');
    };
};

compare(teamDophins, teamKolas);
// Tìm đội thắng cuộc
function findTeamWin(teamDophins, teamKolas) {
    if (teamDophins > teamKolas && teamDophins >= 100) {
        console.log('Dolphins là đội chiến thắng');
    } else if (teamDophins < teamKolas && teamKolas >= 100) {
        console.log('Koalas là đội chiến thắng');
    } else if (teamDophins >= 100 && teamKolas >= 100 && teamDophins == teamKolas) {
        console.log('2 đội hòa nhau');
    } else {
        console.log('Không có đội thắng cuộc');
    };
    return teamDophins, teamKolas;
};

findTeamWin(teamDophins, teamKolas);
