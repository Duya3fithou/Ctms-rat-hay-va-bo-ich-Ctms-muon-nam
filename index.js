const list = document.getElementsByTagName('TR');
const data = [];
for (let i = 5; i < list.length; i++) {
    const quantity = Number(list[i].getElementsByTagName('TD')[1].innerText);
    const diligence = Number(list[i].getElementsByTagName('TD')[4].innerText);
    const midterm = Number(list[i].getElementsByTagName('TD')[5].innerText);
    const endterm = Number(list[i].getElementsByTagName('TD')[6].innerText);
    const subjectName = list[i].getElementsByTagName('TD')[0].innerText;
    const subjectId = list[i].getElementsByTagName('TD')[2].innerText;
    const teacher = list[i].getElementsByTagName('TD')[3].innerText;
    const point_avg = diligence * 0.1 + midterm * 0.2 + endterm * 0.7;
    let new4 = 0;
    if (point_avg < 4) new4 = 0;
    if (point_avg >= 4 && point_avg < 5) new4 = 1;
    if (point_avg >= 5 && point_avg < 5.5) new4 = 1.5;
    if (point_avg >= 5.5 && point_avg < 6.5) new4 = 2;
    if (point_avg >= 6.5 && point_avg < 7) new4 = 2.5;
    if (point_avg >= 7 && point_avg < 8) new4 = 3;
    if (point_avg >= 8 && point_avg < 8.5) new4 = 3.5;
    if (point_avg >= 8.5) new4 = 4;
    const diemHeSo = quantity * new4;
    const dataSubject = {
        subjectName,
        quantity,
        subjectId,
        teacher,
        diligence,
        midterm,
        endterm,
        point_avg,
        new4,
        diemHeSo,
    };
    data.push(dataSubject);
}

const dataFilter = data.filter((item, index) => {
    if (
        item.quantity !== 0 &&
        item.subjectName !== data?.[index + 1]?.subjectName &&
        item.point_avg >= 4
    ) {
        return item;
    }
});
console.log('Danh sách đã qua môn:', dataFilter);
let totalQuantity = 0;
let tongDiemHeSo = 0;
dataFilter.forEach(item => {
    totalQuantity += Number(item.quantity);
    tongDiemHeSo += item.diemHeSo;
});
const avgLadder10 = (tongDiemHeSo / totalQuantity) * 2.5;
const avgLadder4 = avgLadder10 * 0.4;

console.log('Tổng tín chỉ đã tích luỹ: ', totalQuantity);
console.log('Điểm trung bình hệ số 10: ', Math.round(avgLadder10 * 100) / 100);
console.log('Điểm trung bình hệ số 4: ', Math.round(avgLadder4 * 100) / 100);
