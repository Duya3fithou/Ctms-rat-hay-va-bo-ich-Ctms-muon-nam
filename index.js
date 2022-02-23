const list = document.getElementsByTagName('TR');
const data = [];
for (let i = 5; i < list.length; i++) {
    const quantity = Number(list[i].getElementsByTagName('TD')[1].innerText);
    const diligencePoint = Number(list[i].getElementsByTagName('TD')[4].innerText);
    const midtermPoint = Number(list[i].getElementsByTagName('TD')[5].innerText);
    const endtermPoint = Number(list[i].getElementsByTagName('TD')[6].innerText);
    const subjectName = list[i].getElementsByTagName('TD')[0].innerText;
    const subjectId = list[i].getElementsByTagName('TD')[2].innerText;
    const teacher = list[i].getElementsByTagName('TD')[3].innerText;
    const avgPoint = diligencePoint * 0.1 + midtermPoint * 0.2 + endtermPoint * 0.7;
    let coefficient4 = 0;
    if (avgPoint < 4) coefficient4 = 0;
    if (avgPoint >= 4 && avgPoint < 5) coefficient4 = 1;
    if (avgPoint >= 5 && avgPoint < 5.5) coefficient4 = 1.5;
    if (avgPoint >= 5.5 && avgPoint < 6.5) coefficient4 = 2;
    if (avgPoint >= 6.5 && avgPoint < 7) coefficient4 = 2.5;
    if (avgPoint >= 7 && avgPoint < 8) coefficient4 = 3;
    if (avgPoint >= 8 && avgPoint < 8.5) coefficient4 = 3.5;
    if (avgPoint >= 8.5) coefficient4 = 4;
    const coefficientPoint = quantity * coefficient4;
    const dataSubject = {
        subjectName,
        quantity,
        subjectId,
        teacher,
        diligencePoint,
        midtermPoint,
        endtermPoint,
        avgPoint,
        coefficient4,
        coefficientPoint,
    };
    data.push(dataSubject);
}

const dataFilter = data.filter((item, index) => {
    if (
        item.quantity !== 0 &&
        item.subjectName !== data?.[index + 1]?.subjectName &&
        item.avgPoint >= 4
    ) {
        return item;
    }
});
console.log('Danh sách đã qua môn:', dataFilter);
let totalQuantity = 0;
let totalCoefficientPoint = 0;
dataFilter.forEach(item => {
    totalQuantity += Number(item.quantity);
    totalCoefficientPoint += item.coefficientPoint;
});
const avgLadder10 = (totalCoefficientPoint / totalQuantity) * 2.5;
const avgLadder4 = avgLadder10 * 0.4;

console.log('Tổng tín chỉ đã tích luỹ: ', totalQuantity);
console.log('Điểm trung bình hệ số 10: ', Math.round(avgLadder10 * 1000) / 1000);
console.log('Điểm trung bình hệ số 4: ', Math.round(avgLadder4 * 1000) / 1000);
