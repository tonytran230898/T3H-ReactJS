// Bài 1: 
// -	Input: Cho vào chuỗi bất kì
// -	Output: Đếm xem chuỗi đó có bao nhiêu nguyên âm (Nguyên âm là a, e, i, o, u)
function voewCount(str) {
    let voewlList = 'aeiou';
    let vcount = 0;
    for (let key of str.toLowerCase()) {
        if (voewlList.includes(key)) {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(voewCount(
    'Tôi năm nay hơn 70 tuổi mà tôi chưa từng gặp hợp trường hợp nào như này, phải tôi tôi đấm cho mấy nhát'
));
